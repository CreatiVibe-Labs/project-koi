import { NextResponse } from 'next/server';
import JSZip from 'jszip';

export async function POST(request) {
  try {
    const { files } = await request.json();
    
    console.log('📋 Total files requested:', files.length);
    console.log('📝 Files list:', files.map(f => f.name));
    
    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }

    const zip = new JSZip();
    let successCount = 0;
    let failCount = 0;
    
    // Track filename counts for uniqueness
    const filenameCount = {};
    
    // Fetch each file and add to zip with retry mechanism
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let retryCount = 0;
      const maxRetries = 2;
      
      while (retryCount <= maxRetries) {
        try {
          console.log(`🔄 Fetching: ${file.name} (attempt ${retryCount + 1}/${maxRetries + 1})`);
          
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
          
          const response = await fetch(file.url, {
            signal: controller.signal,
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
              'Accept': '*/*',
              'Accept-Encoding': 'gzip, deflate, br',
              'Connection': 'keep-alive',
              'Cache-Control': 'no-cache',
            }
          });
          
          clearTimeout(timeoutId);
          
          if (response.ok) {
            const arrayBuffer = await response.arrayBuffer();
            
            // Generate unique filename
            let uniqueFileName = file.name.trim(); // Remove extra spaces
            
            // Check if filename already exists
            if (filenameCount[uniqueFileName]) {
              filenameCount[uniqueFileName]++;
              const fileExtension = uniqueFileName.split('.').pop();
              const fileNameWithoutExt = uniqueFileName.substring(0, uniqueFileName.lastIndexOf('.'));
              uniqueFileName = `${fileNameWithoutExt} (${filenameCount[uniqueFileName]}).${fileExtension}`;
            } else {
              filenameCount[uniqueFileName] = 1;
            }
            
            zip.file(uniqueFileName, arrayBuffer);
            successCount++;
            console.log(`✅ Successfully added: ${uniqueFileName} (${arrayBuffer.byteLength} bytes)`);
            break; // Success, exit retry loop
          } else {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
        } catch (error) {
          retryCount++;
          console.log(`❌ Attempt ${retryCount} failed for ${file.name}: ${error.message}`);
          
          if (retryCount > maxRetries) {
            failCount++;
            console.log(`🔴 Final failure for ${file.name} after ${maxRetries + 1} attempts`);
            break;
          } else {
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
          }
        }
      }
    }
    
    console.log(`📊 Summary: ${successCount} success, ${failCount} failed out of ${files.length} total`)
    
    // Generate zip
    const zipBuffer = await zip.generateAsync({ 
      type: 'arrayBuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    });
    
    // Return zip as response
    return new NextResponse(zipBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="selected-templates.zip"',
        'Content-Length': zipBuffer.byteLength.toString(),
      },
    });
    
  } catch (error) {
    console.error('ZIP creation error:', error);
    return NextResponse.json({ error: 'Failed to create ZIP' }, { status: 500 });
  }
}
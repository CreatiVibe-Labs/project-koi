'use client';

import React, { useState, useRef } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Tooltip } from 'react-tooltip';

export default function JobApplyForm({ params }) {

    const { slug } = React.use(params); // unwrap the params Promise
    console.log({ slug })

    let slug2 = 'backend_developer';

    const content = {
        backend_developer:
            `<p style="line-height:1.295;margin-bottom:8pt;margin-top:0pt;" dir="ltr">
                <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Job Description:</strong></span></span>
            </p>
            <p style="line-height:1.295;margin-bottom:8pt;margin-left:18pt;margin-top:0pt;" dir="ltr">
                <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">We are looking for a detail-oriented&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Backend Developer</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> to support the development of a secure, scalable private storage and file sharing platform. Working closely with an&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Infrastructure Engineer</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, you will be responsible for implementing server-side logic, managing data flow, and integrating core services related to storage, user access, and file handling. You will also collaborate with frontend team, product managers, and other stakeholders to ensure robust and scalable solutions.</span></span>
            </p>
            <p style="line-height:1.295;margin-bottom:8pt;margin-top:0pt;" dir="ltr">
                <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Responsibilities</strong></span></span>
            </p>
            <ul style="margin-bottom:0;margin-top:0;padding-inline-start:48px;">
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Build and implement scalable, secure backend systems for an&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>enterprise-grade file sharing and secure vault platform</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> using&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Node.js</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Develop APIs for secure file upload/download, sharing, auditing, and digital rights management (DRM)</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Implement&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>granular access controls</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, file-level encryption, and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>role-based permissions</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Integrate with enterprise identity providers (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>SAML</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>LDAP</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>OAuth2</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">) for single sign-on and federated identity</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Develop secure file storage mechanisms with support for&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>end-to-end encryption</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, secure key management, and compliance with&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>industry standards (e.g., HIPAA, SOC 2, GDPR)</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Implement logging, audit trails, and activity monitoring for compliance and traceability</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Collaborate with DevOps to deploy and monitor services in&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>high-availability, fault-tolerant cloud environments</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Optimize backend systems for&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>large-scale concurrent users</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>multi-tenant architectures</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Work with security teams to regularly assess and mitigate vulnerabilities (e.g., OWASP Top 10)</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Maintain thorough API documentation and technical specifications for internal and external integration</span></span>
                </li>
            </ul>
            <p style="line-height:1.295;margin-bottom:8pt;margin-top:0pt;" dir="ltr">
                <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Qualifications</strong></span></span>
            </p>
            <ul style="margin-bottom:0;margin-top:0;padding-inline-start:48px;">
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>3+ years of backend development experience</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> with a strong focus on&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Node.js</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Proven experience building and maintaining secure, enterprise-grade applications involving&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>file storage, encryption</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>data privacy</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Deep understanding of&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>access control models</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, especially&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>role-based</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>attribute-based access control (RBAC/ABAC)</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Experience with&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>data encryption at rest and in transit</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, secure key storage (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>AWS KMS</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Vault</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">), and file integrity validation</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Familiarity with&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>enterprise authentication protocols</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> such as&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>SAML</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>OAuth 2.0</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>OpenID Connect</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, and directory services (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>LDAP</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Active Directory</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">)</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Experience with cloud storage and infrastructure (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>AWS S3</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Azure Blob</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>GCP Storage</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">) with fine-grained access control</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Experience with&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>CI/CD</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, containerization (</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Docker</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Kubernetes</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">), and infrastructure-as-code tools</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Proficient in database design for managing metadata and user activity (PostgreSQL, MongoDB, etc.)</span></span>
                </li>
            </ul>
            <p style="line-height:1.295;margin-bottom:8pt;margin-top:0pt;" dir="ltr">
                <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Preferrable Qualifications</strong></span></span>
            </p>
            <ul style="margin-bottom:0;margin-top:0;padding-inline-start:48px;">
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Solid understanding of&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>compliance standards</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>HIPAA</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>SOC 2</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>ISO 27001</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>GDPR</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">) and how they apply to backend systems</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Knowledge of&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>secure API design</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>rate limiting</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>audit logging</strong></span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Strong communication skills and the ability to collaborate cross-functionally with security, infrastructure, and product teams</span></span>
                </li>
                <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
                    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Proficiency in English</span></span>
                </li>
            </ul>
            <p style="line-height:1.295;margin-bottom:8pt;margin-top:0pt;" dir="ltr">
                <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Work Arrangement</strong></span></span>
            </p>
            <p style="line-height:1.295;margin-bottom:8pt;margin-top:0pt;" dir="ltr">
                <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span class="Apple-tab-span" style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre;">	</span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Remote only</span></span>
            </p>`
    };

    const content2 = {
        backend_developer:
            `<h3>
    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Job Description:</strong></span></span>
</h3>
<p style="line-height:1.295;margin-bottom:8pt;margin-left:18pt;margin-top:0pt;" dir="ltr">
    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">We are looking for a detail-oriented&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Backend Developer</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> to support the development of a secure, scalable private storage and file sharing platform. Working closely with an&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Infrastructure Engineer</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, you will be responsible for implementing server-side logic, managing data flow, and integrating core services related to storage, user access, and file handling. You will also collaborate with frontend team, product managers, and other stakeholders to ensure robust and scalable solutions.</span></span>
</p>
<h3>
    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Responsibilities</strong></span></span>
</h3>
<ul style="margin-bottom:0;margin-top:0;padding-inline-start:48px;">
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Build and implement scalable, secure backend systems for an&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>enterprise-grade file sharing and secure vault platform</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> using&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Node.js</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Develop APIs for secure file upload/download, sharing, auditing, and digital rights management (DRM)</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Implement&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>granular access controls</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, file-level encryption, and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>role-based permissions</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Integrate with enterprise identity providers (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>SAML</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>LDAP</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>OAuth2</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">) for single sign-on and federated identity</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Develop secure file storage mechanisms with support for&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>end-to-end encryption</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, secure key management, and compliance with&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>industry standards (e.g., HIPAA, SOC 2, GDPR)</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Implement logging, audit trails, and activity monitoring for compliance and traceability</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Collaborate with DevOps to deploy and monitor services in&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>high-availability, fault-tolerant cloud environments</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Optimize backend systems for&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>large-scale concurrent users</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>multi-tenant architectures</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Work with security teams to regularly assess and mitigate vulnerabilities (e.g., OWASP Top 10)</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Maintain thorough API documentation and technical specifications for internal and external integration</span></span>
    </li>
</ul>
<h3>
    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Qualifications</strong></span></span>
</h3>
<ul style="margin-bottom:0;margin-top:0;padding-inline-start:48px;">
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>3+ years of backend development experience</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> with a strong focus on&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Node.js</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Proven experience building and maintaining secure, enterprise-grade applications involving&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>file storage, encryption</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>data privacy</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Deep understanding of&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>access control models</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, especially&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>role-based</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>attribute-based access control (RBAC/ABAC)</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Experience with&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>data encryption at rest and in transit</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, secure key storage (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>AWS KMS</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Vault</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">), and file integrity validation</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Familiarity with&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>enterprise authentication protocols</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> such as&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>SAML</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>OAuth 2.0</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>OpenID Connect</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, and directory services (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>LDAP</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Active Directory</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">)</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Experience with cloud storage and infrastructure (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>AWS S3</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Azure Blob</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>GCP Storage</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">) with fine-grained access control</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Experience with&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>CI/CD</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, containerization (</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Docker</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Kubernetes</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">), and infrastructure-as-code tools</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Proficient in database design for managing metadata and user activity (PostgreSQL, MongoDB, etc.)</span></span>
    </li>
</ul>
<h3>
    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Preferrable Qualifications</strong></span></span>
</h3>
<ul style="margin-bottom:0;margin-top:0;padding-inline-start:48px;">
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Solid understanding of&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>compliance standards</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> (e.g.,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>HIPAA</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>SOC 2</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>ISO 27001</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>GDPR</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">) and how they apply to backend systems</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Knowledge of&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>secure API design</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">,&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>rate limiting</strong></span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">, and&nbsp;</span><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>audit logging</strong></span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Strong communication skills and the ability to collaborate cross-functionally with security, infrastructure, and product teams</span></span>
    </li>
    <li style="background-color:transparent;color:#000000;font-family:'Noto Sans Symbols',sans-serif;font-size:10pt;font-style:normal;font-variant:normal;font-weight:400;list-style-type:disc;text-decoration:none;vertical-align:baseline;white-space:pre;" dir="ltr" aria-level="1">
        <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Proficiency in English</span></span>
    </li>
</ul>
<h3>
    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Work Arrangement</strong></span></span>
</h3>
<p style="line-height:1.295;margin-bottom:8pt;margin-top:0pt;" dir="ltr">
    <span style="background-color:transparent;color:#000000;font-family:Aptos;font-size:11pt;"><span class="Apple-tab-span" style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre;">	</span><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Remote only</span></span>
</p>`,

    };

    const htmlContent = content2[slug2]; // yahan se apna content mil jaayega

    const [fileName1, setFileName1] = useState("Resume / CV (PDF, DOCX – Required)");
    const fileInputRef1 = useRef(null);

    const [fileName2, setFileName2] = useState("Cover Letter (PDF, DOCX – Optional)");
    const fileInputRef2 = useRef(null);

    const [fileName3, setFileName3] = useState("Additional Documents (Certificates, References - Optional)");
    const fileInputRef3 = useRef(null);

    const animatedComponents = makeAnimated();
    const [formData, setFormData] = useState({
        company: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        apply_for: 'Software Engeneering',
    });

    const empolyment_type = [
        { value: 'full_time', label: 'Full Time' },
        { value: 'part_time', label: 'Part Time' },
        { value: 'contract', label: 'Contract' },
        { value: 'freelance', label: 'Freelance' }
    ];

    const location = [
        { value: 'japan', label: 'Japan' },
        { value: 'hong_kong', label: 'Hong Kong' },
        { value: 'remote', label: 'Remote' }
    ];

    const currency = [
        { value: 'jpy', label: 'JPY' },
        { value: 'hkd', label: 'HKD' },
        { value: 'usd', label: 'USD' }
    ];

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleButtonClick = () => {
        fileInputRef1.current.click(); // open file dialog
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName1(file.name);
        } else {
            setFileName1("Resume / CV (PDF, DOCX – Required)");
        }
    };

    const handleButtonClick2 = () => {
        fileInputRef2.current.click(); // open file dialog
    };

    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName2(file.name);
        } else {
            setFileName2("Cover Letter (PDF, DOCX – Optional)");
        }
    };

    const handleButtonClick3 = () => {
        fileInputRef3.current.click(); // open file dialog
    };

    const handleFileChange3 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName3(file.name);
        } else {
            setFileName3("Additional Documents (Certificates, References - Optional)");
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.subject.trim()) newErrors.subject = 'Please select a subject';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Form submitted:', formData);
            // Submit logic here
        }
    };
    return (
        <>
            <div className="jobApplyWrap flex flex-col gap-4">
                <div className="flex gap-5 items-center"><p className="title !text-2xl !font-semibold">Title: </p><p className="!text-2xl !font-medium">Software Engeneering</p></div>
                <div className="flex gap-5 items-center"><p className="exp !text-2xl !font-semibold">Experience: </p><p className="!text-2xl !font-medium">2+ Years</p></div>
                <div className="flex flex-col gap-5 items-start">
                    {htmlContent ? (
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    ) : (
                        <p>No content found for: {slug}</p>
                    )}
                </div>
            </div>
            <div className="whyCHooseUsWrapper coreValues careerOp">
                <div className="whyChooseUsHeading gradient-background"><h2>Job Application Form</h2></div>
                <div className="contactForm whyChooseUsCardContents">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <p className='text-center input-field !text-2xl gradient-background'>Personal Information</p>
                        {/* First Name & Last Name */}
                        <div className="doubleRows">
                            <div className="relative">
                                <input
                                    name={'firstName'}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={` input-field ${errors['firstName'] ? 'error' : ''} `}
                                    placeholder={'First Name (Required) '}
                                />
                                {errors['firstName'] && <p className="text-red-500 text-sm mt-1">{errors['firstName']}</p>}
                            </div>
                            <div className="relative">
                                <input
                                    name={'lastName'}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={` input-field ${errors['lastName'] ? 'error' : ''} `}
                                    placeholder={'Last Name (Required) '}
                                />
                                {errors['lastName'] && <p className="text-red-500 text-sm mt-1">{errors['lastName']}</p>}
                            </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="doubleRows">
                            <div className="relative">
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={` input-field ${errors.email ? 'error' : ''}`}
                                    placeholder="Email Address (Required)"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Phone (optional) */}
                            <div className="relative">
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={` input-field ${errors.phone ? 'error' : ''}`}
                                    placeholder="Phone (Required)"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                        </div>

                        {/* Linkedin & Portfolio */}
                        <div className="doubleRows">
                            <div className="relative">
                                <input
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="LinkedIn Profile (Optional)"
                                />
                            </div>

                            {/* Phone (optional) */}
                            <div className="relative">
                                <input
                                    name="portfolio"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className=" input-field"
                                    placeholder="Portfolio / Website (Optional)"
                                />
                            </div>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Position Details</p>

                        {/* Position */}
                        <div className="doubleRows">
                            <div className="relative">
                                <div className='input-field w-full'>
                                    Position Applying For
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    name="apply_for"
                                    value={formData.apply_for}
                                    onChange={handleChange}
                                    className=" input-field"
                                    placeholder="Position Applying For"
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Empolyment Type */}
                        <div className="doubleRows">
                            <div className="relative">
                                <div className='input-field w-full flex gap-2 items-center'>
                                    <span>Empolyment Type</span>
                                    <span className='my-anchor-element'>
                                        <svg
                                            height="17px"
                                            width="15px"
                                            viewBox="0 0 24 24"
                                            fill="#ffffff"
                                            stroke="#ffffff"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    style={{ fill: "#ffffff" }}
                                                    d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z 
             M12,19.66 c-0.938,0-1.58-0.723-1.58-1.66c0-0.964,0.669-1.66,1.58-1.66
             c0.963,0,1.58,0.696,1.58,1.66C13.58,18.938,12.963,19.66,12,19.66z 
             M12.622,13.321c-0.239,0.815-0.992,0.829-1.243,0
             c-0.289-0.956-1.316-4.585-1.316-6.942c0-3.11,3.891-3.125,3.891,0 
             C13.953,8.75,12.871,12.473,12.622,13.321z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <Tooltip anchorSelect=".my-anchor-element" place="top">
                                        Select one or more
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="relative">
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue=""
                                    isMulti
                                    placeholder={'Select Empolyment Type'}
                                    options={empolyment_type}
                                    className='input-field !p-[8px]'
                                />
                                {/* <input
                                    name="apply_for"
                                    value={formData.apply_for}
                                    onChange={handleChange}
                                    className=" input-field"
                                    placeholder="Position Applying For"
                                    readOnly
                                /> */}
                            </div>
                        </div>

                        {/* Preferred Location */}
                        <div className="doubleRows">
                            <div className="relative">
                                <div className='input-field w-full flex gap-2 items-center'>
                                    <span>Preferred Location </span>
                                    <span className='preferred'>
                                        <svg
                                            height="17px"
                                            width="15px"
                                            viewBox="0 0 24 24"
                                            fill="#ffffff"
                                            stroke="#ffffff"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    style={{ fill: "#ffffff" }}
                                                    d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z 
             M12,19.66 c-0.938,0-1.58-0.723-1.58-1.66c0-0.964,0.669-1.66,1.58-1.66
             c0.963,0,1.58,0.696,1.58,1.66C13.58,18.938,12.963,19.66,12,19.66z 
             M12.622,13.321c-0.239,0.815-0.992,0.829-1.243,0
             c-0.289-0.956-1.316-4.585-1.316-6.942c0-3.11,3.891-3.125,3.891,0 
             C13.953,8.75,12.871,12.473,12.622,13.321z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <Tooltip anchorSelect=".preferred" place="top">
                                        We do not sponsor working visa; you must be legally authorized to work in the location you selected
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="relative">
                                <Select
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    defaultValue=""
                                    placeholder={'Preferred Location'}
                                    options={location}
                                    className='input-field !p-[8px]'
                                />
                            </div>
                        </div>

                        {/* Desired Salary */}
                        <div className="doubleRows">
                            <div className="relative">
                                <div className='input-field w-full flex gap-2 items-center'>
                                    <span>Desired Salary (Optional) </span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className='input-field flex gap-5 items-center !p-[7px]'>

                                    <Select
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        defaultValue=""
                                        placeholder={'Currency'}
                                        options={currency}
                                        className='!p-[0px] w-full'
                                    />
                                    <span className='text-4xl text-[#68726b] mt-[-10px]'>/</span>
                                    <input
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        className=" w-full"
                                        placeholder="Amount"
                                        type='number'
                                    />
                                    <span className='text-4xl text-[#68726b] mt-[-10px]'>/</span>
                                    <input
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className=" w-full"
                                        placeholder="Time"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Documents</p>

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef1}
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            <div className="input-field flex justify-between items-center">
                                <span>
                                    {fileName1}
                                </span>
                                <div className="upload-button button" onClick={handleButtonClick}>
                                    Upload
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef2}
                                onChange={handleFileChange2}
                                className="hidden"
                            />

                            <div className="input-field flex justify-between items-center">
                                <span>
                                    {fileName2}
                                </span>
                                <div className="upload-button button" onClick={handleButtonClick2}>
                                    Upload
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef3}
                                onChange={handleFileChange3}
                                className="hidden"
                            />

                            <div className="input-field flex justify-between items-center">
                                <span>
                                    {fileName3}
                                </span>
                                <div className="upload-button button" onClick={handleButtonClick3}>
                                    Upload
                                </div>
                            </div>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Questionnaire</p>

                        <div className="relative">
                            <textarea className="input-field resize-none" rows={2} placeholder="Why are you interested in this position (Max. 200 words)"></textarea>
                        </div>
                        <div className="relative">
                            <textarea className="input-field resize-none" rows={2} placeholder="Describe your most relevant experience for this role"></textarea>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Consent</p>

                        <div className="reative flex items-center gap-3">

                            <label className="check-container text-lg font-medium flex items-center">I certify that the information submitted is true and complete.
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        <div className="reative flex items-center gap-3">

                            <label className="check-container text-lg font-medium flex items-center">I consent to the processing of my data for recruitment purposes.
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className='text-center'>
                            <button
                                type="submit"
                                className="button"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
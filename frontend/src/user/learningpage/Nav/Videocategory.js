import React, { useState, useEffect } from 'react';
import './VideoCategory.css'; // Ensure to import the custom CSS file

const VideoCategory = ({ category, searchQuery }) => {
  const [filteredVideos, setFilteredVideos] = useState([]);

  // Define videos for each category
  const videos = {
    All:[
      { id: 1, url: 'https://www.youtube.com/embed/ESnrn1kAD4E?si=shAL5sa8DIfHkumP' },
      { id: 2, url: 'https://www.youtube.com/embed/HGTJBPNC-Gw?si=1UrA85gDmSU1LhJ0' },
      { id: 1, url: 'https://www.youtube.com/embed/bm0OyhwFDuY?si=c7mb82Nva24FhriT' },
      { id: 2, url: 'https://www.youtube.com/embed/IT2durkDCXM?si=86Jbrd-Kf1Vn4ai2' },
      { id: 9, url: 'https://www.youtube.com/embed/BU_afT-aIn0?si=WPgcwIwrQt3erbjX' },
      { id: 10, url: 'https://www.youtube.com/embed/TqitOEok9do?si=iRU0YPTnxQZLxAt1' },
      { id: 11, url: 'https://www.youtube.com/embed/8pMUkEbAM7g?si=yNQynhptGD2sdGYw' },
    //   { id: 12, url: 'https://www.youtube.com/embed/wELfwQmtnvo?si=AwKAvbu6Bu7T3-e9' },
    //   { id: 3, url: 'https://www.youtube.com/embed/eIrMbAQSU34?si=UXcRJ_DSe5P-TyqK' },
    //   { id: 4, url: 'https://www.youtube.com/embed/nqB3qAtDLKU?si=4jWA-kGI3hsC-QV6' },
    //   { id: 3, url: 'https://www.youtube.com/embed/FYErehuSuuw?si=nsaYyhfX4tDD17Aq' },
    //   { id: 1, url: 'https://www.youtube.com/embed/mlIUKyZIUUU?si=3L5YEeFD47WKPLJE' },
    //   { id: 2, url: 'https://www.youtube.com/embed/ZzaPdXTrSb8?si=R2yGsA4LP42XfQB1' },
    //   { id: 3, url: 'https://www.youtube.com/embed/MNeX4EGtR5Y?si=sgLwDqIbzmfe-_cD' },
    //   { id: 4, url: 'https://www.youtube.com/embed/EAR7De6Goz4?si=ULq_d1tSnJCv8oJn' },
    //   { id: 5, url: 'https://www.youtube.com/embed/wN0x9eZLix4?si=lVhAweJURUPLAZ2z' },
    //   { id: 4, url: 'https://www.youtube.com/embed/hlwlM4a5rxg?si=ZEe797sbMHKI67JQ' },
    //   { id: 5, url: 'https://www.youtube.com/embed/CpgNVyUxUV0?si=JanZVRhH6WG-aFkB' },
    //   { id: 1, url: 'https://www.youtube.com/embed/lkIFF4maKMU?si=2i6DqTRtvQQEtzUq' },
    // { id: 2, url: 'https://www.youtube.com/embed/W6NZfCO5SIk?si=ZztfFdM8_ueW85EE' },
    // { id: 3, url: 'https://www.youtube.com/embed/poo0BXryffI?si=tanwVhLYr9EMbcCf' },
    // { id: 4, url: 'https://www.youtube.com/embed/zQeV9ZPT1lU?si=Tx3KJdqXPTfrYCFp' },
    // { id: 5, url: 'https://www.youtube.com/embed/PkZNo7MFNFg?si=E3_0lu1Hjpa1D0yP' },
    // { id: 6, url: 'https://www.youtube.com/embed/ajdRvxDWH4w?si=pugLC_DxmP3-vomZ' },
    //   { id: 1, url: 'https://www.youtube.com/embed/KgCgpCIOkIs' },
    //   { id: 2, url: 'https://www.youtube.com/embed/m67-bOpOoPU' },
    //   { id: 3, url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    //   { id: 4, url: 'https://www.youtube.com/embed/_uQrJ0TkZlc' },
    //   { id: 1, url: 'https://www.youtube.com/embed/B31LgI4Y4DQ?si=l6aDZgN3Fh8SAFe-' },
    //   { id: 2, url: 'https://www.youtube.com/embed/RBSGKlAvoiM?si=Mcz2T_ls6qLdCcMw' },
    //   { id: 3, url: 'https://www.youtube.com/embed/xWLxhF3b5P8?si=eX_ycAOUeXS1AYnu' },
    //   { id: 4, url: 'https://www.youtube.com/embed/CBYHwZcbD-s?si=mv2hTstq9ldkZq-0' },
    //   { id: 5, url: 'https://www.youtube.com/embed/2ZLl8GAk1X4?si=tDrput1Aj9tfT7QR' },
    ],
    Java: [
      { id: 1, url: 'https://www.youtube.com/embed/bm0OyhwFDuY?si=c7mb82Nva24FhriT' },
      { id: 2, url: 'https://www.youtube.com/embed/IT2durkDCXM?si=86Jbrd-Kf1Vn4ai2' },
      { id: 3, url: 'https://www.youtube.com/embed/eIrMbAQSU34?si=UXcRJ_DSe5P-TyqK' },
      { id: 4, url: 'https://www.youtube.com/embed/nqB3qAtDLKU?si=4jWA-kGI3hsC-QV6' },
      { id: 6, url: 'https://www.youtube.com/embed/UmnCZ7-9yDY?si=PovqUSeXH8Srnena' },
      { id: 5, url: 'https://www.youtube.com/embed/CFD9EFcNZTQ?si=HXohYncp-U6qT4UP'  },
      { id: 7, url: 'https://www.youtube.com/embed/A74TOX803D0?si=WZ247-Nb1tg2s-ad' },
      { id: 8, url: 'https://www.youtube.com/embed/vvanI8NRlSI?si=JSXtyjyOGog8VZXc' },
      { id: 9, url: 'https://www.youtube.com/embed/l9AzO1FMgM8?si=brgkGRZ0V86806BQ' },
      { id: 10, url: 'https://www.youtube.com/embed/4XTsAAHW_Tc?si=KkanIVptuSLAIZSi' },
      { id: 11, url: 'https://www.youtube.com/embed/GoXwIVyNvX0?si=b4x0HSUDalbz0y8V' },
      { id: 12, url: 'https://www.youtube.com/embed/SkKJDwpMdvA?si=_xgKkY1XkQstDune' },
      { id: 13, url: 'https://www.youtube.com/embed/L_VWgj06DKI?si=CfYwYTjQS0vnTef4' },  
      { id: 14, url: 'https://www.youtube.com/embed/XTkqv5y7Rjg?si=-4QnIX2gR4Zbon1Z' },
      { id: 15, url: 'https://www.youtube.com/embed/SK5KOWzWywQ?si=29dGMlWCfQL9cQgg' },
      { id: 16, url: 'https://www.youtube.com/embed/hBh_CC5y8-s?si=Ex45tvX8zMLtuvLF' },      
      { id: 17, url: 'https://youtube.com/embed/sMI4pXjQBRU?si=T73qJhnCArM00JUO' },
      { id: 18, url: 'https://www.youtube.com/embed/xWLxhF3b5P8?si=zWp34kJ7NfcW2Lio' },
      { id: 19, url: 'https://www.youtube.com/embed/Qgl81fPcLc8?si=X6oL-CtAJAyiGNFL' },
      { id: 20, url: 'https://www.youtube.com/embed/_lu5YoPAFOw?si=dmwvHh-HwYFbAHwK' },      
      { id: 21, url: 'https://youtube.com/embed/ARhZQ4fp5Ik?si=0kjNcrwlgTNDk-aq' },
      { id: 22, url: 'https://www.youtube.com/embed/DW8QKNvWd0s?si=txKyiPyJbCLDLbrV' },
      { id: 23, url: 'https://www.youtube.com/embed/nqB3qAtDLKU?si=v-5ZQ--EaOZERtN7' },
      { id: 24, url: 'https://www.youtube.com/embed/FCNg8KyMmGI?si=pG_z-_9Rq4CWmCg0' },

    ],

   'Phyton': [
  { id: 1, url: 'https://www.youtube.com/embed/KgCgpCIOkIs' },
  { id: 2, url: 'https://www.youtube.com/embed/m67-bOpOoPU' },
  { id: 3, url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
  { id: 4, url: 'https://www.youtube.com/embed/_uQrJ0TkZlc' },
  { id: 5, url: 'https://www.youtube.com/embed/BiDOehqG68g' },
  { id: 6, url: 'https://www.youtube.com/embed/dHzYLjfr-uY' },
  { id: 7, url: 'https://www.youtube.com/embed/rfscVS0vtbw' },
  { id: 8, url: 'https://www.youtube.com/embed/DInMru2Eq6E' },
  { id: 9, url: 'https://www.youtube.com/embed/6R0TkF6Mgrk' },
  { id: 10, url: 'https://www.youtube.com/embed/PnPc2xDwMvQ' },
  { id: 11, url: 'https://www.youtube.com/embed/DAxKQIG4T2Y' },
  { id: 12, url: 'https://www.youtube.com/embed/tvNBf-C0Dy8' },
  { id: 13, url: 'https://www.youtube.com/embed/ERCMXc8x7mc' },
  { id: 14, url: 'https://www.youtube.com/embed/St48epdRDZw' },
  { id: 15, url: 'https://www.youtube.com/embed/DWgzHbglNIo' },
  { id: 16, url: 'https://www.youtube.com/embed/pkYVOmU3MgA' },
  { id: 17, url: 'https://www.youtube.com/embed/gzM8M77hx1Q' },
  { id: 18, url: 'https://www.youtube.com/embed/HGOBQPFzWKo' },
  { id: 19, url: 'https://www.youtube.com/embed/th4OBktqK1I' },
  { id: 20, url: 'https://www.youtube.com/embed/6erwYj4T86c' },
  { id: 21, url: 'https://www.youtube.com/embed/r8PVqT1UcpI' },
  { id: 22, url: 'https://www.youtube.com/embed/KgCgpCIOkIs' },
  { id: 23, url: 'https://www.youtube.com/embed/8ext9G7xspg' },
  { id: 23, url: 'https://www.youtube.com/embed/6R0TkF6Mgrk' }

],

'DSA': [
    { id: 1, url: 'https://www.youtube.com/embed/B31LgI4Y4DQ?si=l6aDZgN3Fh8SAFe-' },
    { id: 2, url: 'https://www.youtube.com/embed/RBSGKlAvoiM?si=Mcz2T_ls6qLdCcMw' },
    { id: 3, url: 'https://www.youtube.com/embed/xWLxhF3b5P8?si=eX_ycAOUeXS1AYnu' },
    { id: 4, url: 'https://www.youtube.com/embed/CBYHwZcbD-s?si=mv2hTstq9ldkZq-0' },
    { id: 5, url: 'https://www.youtube.com/embed/2ZLl8GAk1X4?si=tDrput1Aj9tfT7QR' },
    { id: 6, url: 'https://www.youtube.com/embed/F-ao3Q6I2Fc?si=PffGOihzabVbssWM' },
    { id: 7, url: 'https://www.youtube.com/embed/1Z3RrRYIoVs?si=WnZCvhlOPeV0Rajq' },
    { id: 8, url: 'https://www.youtube.com/embed/W-_qnPYxHdU?si=jNmoYU-8CXZwGCkb' },
    { id: 9, url: 'https://www.youtube.com/embed/qNGyI95E5AE?si=2p2NPbL2YtLAJdbl' },
    { id: 10, url: 'https://www.youtube.com/embed/5mEwh4MfwB4?si=Bk6hmnAN-U7m9Cog' },
    { id: 11, url: 'https://www.youtube.com/embed/s2mYsPWzLjg?si=QD8W4wCofdIgPt1H' },
    { id: 12, url: 'https://www.youtube.com/embed/8hly31xKli0?si=odFeD5jxw2aEwwSO' },
    { id: 13, url: 'https://www.youtube.com/embed/8c6kE5LKTMI?si=CPjTEllEEI--sMMK' },
    { id: 14, url: 'https://www.youtube.com/embed/Nx4bvwU0DqE?si=9nMiYuYzogUvxzZq' },
    { id: 15, url: 'https://www.youtube.com/embed/sjXfClqA0Ls?si=PYb0-20sQDsb4FC4' },
    { id: 16, url: 'https://www.youtube.com/embed/Nq7ok-OyEpg?si=mfBNAOjEiAddIQFU' },
    { id: 17, url: 'https://www.youtube.com/embed/xF554Tlzo-c?si=CMTO-51vQruhE7eD' },
    { id: 18, url: 'https://www.youtube.com/embed/mGJusQ7iBwc?si=pLOGHZN9u--5dJEm' },
    { id: 19, url: 'https://www.youtube.com/embed/pkYVOmU3MgA?si=C4qvxzl0n4nI_9fq' },
    { id: 20, url: 'https://www.youtube.com/embed/OkS9YkfW50s?si=2TSE61GIlZVeenIK' },
    { id: 21, url: 'https://www.youtube.com/embed/nobQAjHkFfc?si=vANb0wCd7qZ8r0yg' },
    { id: 22, url: 'https://www.youtube.com/embed/L-qAKDDo9mA?si=jK7n8vtK--PTbsGc' },
    { id: 24, url: 'https://www.youtube.com/embed/FCNg8KyMmGI?si=pG_z-_9Rq4CWmCg0' },
    { id: 24, url: 'https://www.youtube.com/embed/clKBWNdDE5c?si=3DBWBsEdMlkumxjP' },

]
,
   'Javascript': [
    { id: 1, url: 'https://www.youtube.com/embed/lkIFF4maKMU?si=2i6DqTRtvQQEtzUq' },
    { id: 2, url: 'https://www.youtube.com/embed/W6NZfCO5SIk?si=ZztfFdM8_ueW85EE' },
    { id: 3, url: 'https://www.youtube.com/embed/poo0BXryffI?si=tanwVhLYr9EMbcCf' },
    { id: 4, url: 'https://www.youtube.com/embed/zQeV9ZPT1lU?si=Tx3KJdqXPTfrYCFp' },
    { id: 5, url: 'https://www.youtube.com/embed/PkZNo7MFNFg?si=E3_0lu1Hjpa1D0yP' },
    { id: 6, url: 'https://www.youtube.com/embed/ajdRvxDWH4w?si=pugLC_DxmP3-vomZ' },
    { id: 7, url: 'https://www.youtube.com/embed/E3XxeE7NF30?si=jfooubsCUKB1Vo8Y' },
    { id: 8, url: 'https://www.youtube.com/embed/lfmg-EJ8gm4?si=Nbmbqcb-74m1BEZK' },
    { id: 9, url: 'https://www.youtube.com/embed/bHExCmA65pY?si=8_QZzflPxQaONOsP' },
    { id: 10, url: 'https://www.youtube.com/embed/Zi-Q0t4gMC8?si=mZw5UT1ohT6Y23Ru' },
    { id: 11, url: 'https://www.youtube.com/embed/DAxKQIG4T2Y?si=KESNuDxZR6ZcF19y' },
    { id: 12, url: 'https://www.youtube.com/embed/ER9SspLe4Hg?si=7Tl-5HytIBYlOhHz' },
    { id: 13, url: 'https://www.youtube.com/embed/VlPiVmYuoqw?si=VDiedWlHv9WeIj0d' },
    { id: 14, url: 'https://www.youtube.com/embed/ldwlOzRvYOU?si=EXdaDFkL7dca-hwP' },
    { id: 15, url: 'https://www.youtube.com/embed/T0DLc0XIPV8?si=RER6uoJkTm-B0Vaw' },
    { id: 16, url: 'https://www.youtube.com/embed/OEyZx0KttgY?si=pQI2aL2HUwlGPh10' },
    { id: 17, url: 'https://www.youtube.com/embed/_CYdBOopoMs?si=Mp4qgJMSYZQkACtK' },
    { id: 18, url: 'https://www.youtube.com/embed/S0uU2vELiwA?si=X1L39LDg6W1UoJLJ' },
    { id: 19, url: 'https://www.youtube.com/embed/sxq-8qv2i1Q?si=yw-9ZXnMTQyE8Tvb' },
    { id: 20, url: 'https://www.youtube.com/embed/zQeV9ZPT1lU?si=Tx3KJdqXPTfrYCFp' },
    { id: 21, url: 'https://www.youtube.com/embed/NfvtQ2p5QG4?si=WS8bXxTItMUrOUjg' },
    { id: 22, url: 'https://www.youtube.com/embed/AGeRXBW9vsg?si=giG7O5oVKAqsg11k' },
    { id: 23, url: 'https://www.youtube.com/embed/Pyv0tMm5i_w?si=ebKVQ2NLxLag7To0' },
    { id: 24, url: 'https://www.youtube.com/embed/FCNg8KyMmGI?si=pG_z-_9Rq4CWmCg0' },
    
  ]
  ,
  'UI/UX': [
    { id: 2, url: 'https://www.youtube.com/embed/x3dQsMkJgDg?si=zkPcPt_lRA6__Ofn' },
  { id: 3, url: 'https://www.youtube.com/embed/TJtEQ1p1hw4?si=migZcyX4cgTs6frS' },
  { id: 4, url: 'https://www.youtube.com/embed/c9Wg6Cb_YlU?si=yMRQ0muOn7Cc79Sm' },
  { id: 5, url: 'https://www.youtube.com/embed/Q324oRLYhlM?si=ksmkL8xpZvLSFuPn' },
  { id: 6, url: 'https://www.youtube.com/embed/Sa4Th8iPanw?si=AKW2fKia2OCd_goJ' },
  { id: 7, url: 'https://www.youtube.com/embed/zHAa-m16NGk?si=EIzVHYbuSRVKlyFM' },
  { id: 8, url: 'https://www.youtube.com/embed/BzuG0cIC3cg?si=zRMev2Rne_YDc0Fu' },
  { id: 9, url: 'https://www.youtube.com/embed/BU_afT-aIn0?si=WPgcwIwrQt3erbjX' },
  { id: 10, url: 'https://www.youtube.com/embed/TqitOEok9do?si=iRU0YPTnxQZLxAt1' },
  { id: 11, url: 'https://www.youtube.com/embed/8pMUkEbAM7g?si=yNQynhptGD2sdGYw' },
  { id: 12, url: 'https://www.youtube.com/embed/wELfwQmtnvo?si=AwKAvbu6Bu7T3-e9' },
  { id: 13, url: 'https://www.youtube.com/embed/5Gf31mzWInA?si=7MCdue2dn3gp0SiW' },
  { id: 14, url: 'https://www.youtube.com/embed/F-7Ya7Pyq1E?si=qxkGce4pYNmqnnet' },
  { id: 15, url: 'https://www.youtube.com/embed/Zb1zVeXLUf8?si=xqLy1_2DD1-gyXVj' },
  { id: 16, url: 'https://www.youtube.com/embed/9y0sxOeDSJc?si=4C0Ufy4Fx6jDqkkq' },
  { id: 17, url: 'https://www.youtube.com/embed/X0IfhWC5kwM?si=9kwrrY3w2133ksR0' },
  { id: 18, url: 'https://www.youtube.com/embed/onyB_X3zk6o?si=Uxp0JICUdJmTRSC3' },
  { id: 19, url: 'https://www.youtube.com/embed/MoVO8eVe3gI?si=r3RppcqRhW1mz95j' },
  { id: 20, url: 'https://www.youtube.com/embed/Yf00MKUfcIY?si=wzXy8tlbI_ra_J4w' },
  { id: 21, url: 'https://www.youtube.com/embed/jwCmIBJ8Jtc?si=JOpO4tqHEnDbL7cn' },
  { id: 22, url: 'https://www.youtube.com/embed/slentvTk3gY?si=sQqWJ5FU4veSE6_A' },
  { id: 23, url: 'https://www.youtube.com/embed/bI6q16ffdgQ?si=kKD3BX1Pnl0mdj7U' },
  { id: 24, url: 'https://www.youtube.com/embed/SIoOS6tFw1Y?si=z9YMR1s0SswLA_2P' },
  { id: 25, url: 'https://www.youtube.com/embed/ezldKx-jPag?si=lxt_-v9p0jqnxmQ4' }
]
,
'C++': [
    { id: 1, url: 'https://www.youtube.com/embed/mlIUKyZIUUU?si=3L5YEeFD47WKPLJE' },
    { id: 2, url: 'https://www.youtube.com/embed/ZzaPdXTrSb8?si=R2yGsA4LP42XfQB1' },
    { id: 3, url: 'https://www.youtube.com/embed/MNeX4EGtR5Y?si=sgLwDqIbzmfe-_cD' },
    { id: 4, url: 'https://www.youtube.com/embed/EAR7De6Goz4?si=ULq_d1tSnJCv8oJn' },
    { id: 5, url: 'https://www.youtube.com/embed/wN0x9eZLix4?si=lVhAweJURUPLAZ2z' },
    { id: 6, url: 'https://www.youtube.com/embed/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL&si=xdXniaBs_e8hDx5W' },
    { id: 7, url: 'https://www.youtube.com/embed/McojvctVsUs?si=MpgsuVhBTPPT7q5Q' },
    { id: 8, url: 'https://www.youtube.com/embed/ns3ASWcTlvA?si=U0kOjQo672y88wjy' },
    { id: 9, url: 'https://www.youtube.com/embed/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ&si=k6yAzxO5kBR4nY8o' },
    { id: 10, url: 'https://www.youtube.com/embed/e7sAf4SbS_g?si=GFwc_qTTT5Fj7UIi' },
    { id: 11, url: 'https://www.youtube.com/embed/lsOOs5J8ycw?si=S63P1N6_NaqaG6Vo' },
    { id: 12, url: 'https://www.youtube.com/embed/mlIUKyZIUUU?si=3L5YEeFD47WKPLJE' },
    { id: 13, url: 'https://www.youtube.com/embed/1OsGXuNA5cc?si=QulZxLaK55fSd8V2' },
    { id: 14, url: 'https://www.youtube.com/embed/Nq7ok-OyEpg?si=9gvWIAi_V15CoaOG' },
    { id: 15, url: 'https://www.youtube.com/embed/B31LgI4Y4DQ?si=kaAc1lvlO7QY2JvW' },
    { id: 16, url: 'https://www.youtube.com/embed/e_q7AemBFmM?si=_LzGLaKObIix1QXl' },
    { id: 17, url: 'https://www.youtube.com/embed/CM-T-NkvnmA?si=qqYD6ETRn3ETODqW' },
    { id: 18, url: 'https://www.youtube.com/embed/-47a1XMna7I?si=Wre5ciqgVILRolBp' },
    { id: 19, url: 'https://www.youtube.com/embed/9d49MhvVL8k?si=x8u9q6-Vi_33f4Wi' },
    { id: 20, url: 'https://www.youtube.com/embed/QOmtANGEI7U?si=Y5zDRP9DGOjCpyOQ' },
    { id: 21, url: 'https://www.youtube.com/embed/lpURUbdtGao?si=7lhH3Krk5rRDrkgV' },
    { id: 22, url: 'https://www.youtube.com/embed/i_Iq4_Kd7Rc?si=_fJjgJoUikZ80WOE' },
    { id: 23, url: 'https://www.youtube.com/embed/y27SHJh706A?si=Sh_TvMkv4x9tkVGU' },
    { id: 24, url: 'https://www.youtube.com/embed/FCNg8KyMmGI?si=pG_z-_9Rq4CWmCg0' },

],
'HTML/CSS': [
  { id: 1, url: 'https://www.youtube.com/embed/ESnrn1kAD4E?si=shAL5sa8DIfHkumP' },
  { id: 2, url: 'https://www.youtube.com/embed/HGTJBPNC-Gw?si=1UrA85gDmSU1LhJ0' },
  { id: 3, url: 'https://www.youtube.com/embed/FYErehuSuuw?si=nsaYyhfX4tDD17Aq' },
  { id: 4, url: 'https://www.youtube.com/embed/hlwlM4a5rxg?si=ZEe797sbMHKI67JQ' },
  { id: 5, url: 'https://www.youtube.com/embed/CpgNVyUxUV0?si=JanZVRhH6WG-aFkB' },
  { id: 6, url: 'https://www.youtube.com/embed/vfs1wBDoqBY?si=TMRfgAq9U0CU1uJt' },
  { id: 7, url: 'https://www.youtube.com/embed/TVFu4-Kd4oM?si=Rki7gM5MsCA5BMes' },
  { id: 8, url: 'https://www.youtube.com/embed/yQimoqo0-7g?si=805oJCG7aEolKSne' },
  { id: 9, url: 'https://www.youtube.com/embed/92bkNXvnpmg?si=lAF2PjcDpAx6pxHI' },
  { id: 10, url: 'https://www.youtube.com/embed/S837NywVKp4?si=cD0g9bDOTs69cOqj' },
  { id: 11, url: 'https://www.youtube.com/embed/a_iQb1lnAEQ?si=PlSudXQmqbGVclZq' },
  { id: 12, url: 'https://www.youtube.com/embed/qz0aGYrrlhU?si=ewR3noMoLn0io3Ak' },
  { id: 13, url: 'https://www.youtube.com/embed/k3TaSKUNuXs?si=6j8Ah0OkWZzw9zWS' },
  { id: 14, url: 'https://www.youtube.com/embed/dX8396ZmSPk?si=FWWQRRclV5fHddZJ' },
  { id: 15, url: 'https://www.youtube.com/embed/TzuWIHGFKCQ?si=gS53L2fdNhI4vlhG' },
  { id: 16, url: 'https://www.youtube.com/embed/-8LTPIJBGwQ?si=Uk7bbt05EPKuwjs5' },
  { id: 17, url: 'https://www.youtube.com/embed/nGhKIC_7Mkk?si=iy2UTllXTI9SZlg7' },
  { id: 18, url: 'https://www.youtube.com/embed/-u3vE84Wo_U?si=_NnioLLiZe6RMWQt' },
  { id: 19, url: 'https://www.youtube.com/embed/krfUjg0S2uI?si=kZXCBkID2jBDrfbJ' },
  { id: 20, url: 'https://www.youtube.com/embed/P7hnMYaxgRQ?si=bl0WkQf6Z52G2nUd' },
  { id: 21, url: 'https://www.youtube.com/embed/P7hnMYaxgRQ?si=j30V_P5nwygsoFU2' },
  { id: 22, url: 'https://www.youtube.com/embed/CQZxeoQeo5c?si=mCMoURlh-5M37J3j' },
  { id: 23, url: 'https://www.youtube.com/embed/Ap7CjB-dVqE?si=iH5oh3cOs32ZL8eN' },
  { id: 24, url: 'https://www.youtube.com/embed/Zb1zVeXLUf8?si=f2vfGdjdSLht30_t' }
],
'Tailwind CSS': [
  { id: 1, url: 'https://www.youtube.com/embed/tS7upsfuxmo?si=hD96lQ6BcpheX075' },
  { id: 2, url: 'https://www.youtube.com/embed/ft30zcMlFao?si=UfRQQ50m7yPjuFOt' },
  { id: 3, url: 'https://www.youtube.com/embed/q4nhEyFMzVg?si=EuMH_uLRTQ0d7ymn' },
  { id: 4, url: 'https://www.youtube.com/embed/8eQwgc9nc64?si=YTwwe8ErRHhK1sNh' },
  { id: 5, url: 'https://www.youtube.com/embed/DenUCuq4G04?si=dsMGkcQFH2cccTbn' },
  { id: 6, url: 'https://www.youtube.com/embed/h9Zun41-Ozc?si=r4Jt2b6zksEcBtBp' },
  { id: 7, url: 'https://www.youtube.com/embed/_9mTJ84uL1Q?si=GMn_nUk6xMLQ4Ol4' },
  { id: 8, url: 'https://www.youtube.com/embed/vYowvsUiChs?si=e3y5C9wwzW-fNkGy' },
  { id: 9, url: 'https://www.youtube.com/embed/Zb1zVeXLUf8?si=XJA-r4xQJYfs0bNx' },
  { id: 10, url: 'https://www.youtube.com/embed/BTyDQRil9s4?si=IpM0h1lxj4n6TXei' },
  { id: 11, url: 'https://www.youtube.com/embed/SqcY0GlETPk?si=SmFWGR-Bya_Xt0rJ' },
  { id: 12, url: 'https://www.youtube.com/embed/vpAJ0s5S2t0?si=G6CZMWdYfZAAZ96S' },
  { id: 13, url: 'https://www.youtube.com/embed/OXGznpKZ_sA?si=CSY4MisQ1ibkeMsE' },
  { id: 14, url: 'https://www.youtube.com/embed/B91wc5dCEBA?si=SF0MSZXcg6G74eMX' },
  { id: 15, url: 'https://www.youtube.com/embed/yqaLSlPOUxM?si=bx7gBET0zlvIQjA4' },
  { id: 16, url: 'https://www.youtube.com/embed/0fYi8SGA20k?si=F5foPh61B_q_WRK0' },
  { id: 17, url: 'https://www.youtube.com/embed/kLEBM1_7fWY?si=PTw3MgYPA1_6Xtjb' },
  { id: 18, url: 'https://www.youtube.com/embed/myYlGLFxZas?si=CfPjDR4UOmt6sgTY' },
  { id: 19, url: 'https://www.youtube.com/embed/KkQATIXBY5w?si=gC7M3tJjc4pzyDwu' },
  { id: 21, url: 'https://www.youtube.com/embed/IHL_r2otyw4?si=WFPlk2twZEVwc8kD' },
  { id: 22, url: 'https://www.youtube.com/embed/RbxHZwFtRT4?si=E-7v2MTPYtymWy8b' },
  { id: 23, url: 'https://www.youtube.com/embed/XENGw99u4uw?si=OkJlCbiht6YGcz0H' },
  { id: 24, url: 'https://www.youtube.com/embed/9jRTo7ILxQc?si=UXMItrHdEGi6O9lw' },
  { id: 25, url: 'https://www.youtube.com/embed/MxEtxo_AaZ4?si=sDULZMU2gBUBIOIG' },
  { id: 26, url: 'https://www.youtube.com/embed/L4_jarMnB0c?si=sYUot6MxLQbyPBGQ' },
  { id: 27, url: 'https://www.youtube.com/embed/dFgzHOX84xQ?si=ISaCKbIWK3mrOjvx' },
  { id: 28, url: 'https://www.youtube.com/embed/4zHNGNCIezY?si=44Xyjejox49myJb4' }
],
NoSQL: [
  { id: 1, url: 'https://www.youtube.com/embed/0buKQHokLK8?si=eNeEhBKaRi9x3rkn' },
  { id: 2, url: 'https://www.youtube.com/embed/_Ss42Vb1SU4?si=O-yzxJ7Gsu59_5iK' },
  { id: 3, url: 'https://www.youtube.com/embed/53eqvG3-1AM?si=FkLHlNeJeZs2RPjA' },
  { id: 4, url: 'https://www.youtube.com/embed/xh4gy1lbL2k?si=eo1mv0e1hwobj3l-' },
  { id: 5, url: 'https://www.youtube.com/embed/ziq7FUKpCS8?si=_7gSoGzZnfz9FD4c' },
  { id: 6, url: 'https://www.youtube.com/embed/qEhNHOEa5sE?si=LMXKmaQB09UTA_c0' },
  { id: 7, url: 'https://www.youtube.com/embed/Q5aTUc7c4jg?si=5dE6ArIjrV6w956r' },
  { id: 8, url: 'https://www.youtube.com/embed/aUPVpIYiLCc?si=8vkQQsk_2CTpbhSK' },
  { id: 9, url: 'https://www.youtube.com/embed/hlGoQC332VM?si=f6dNWhf0XG1hhOYx' },
  { id: 10, url: 'https://www.youtube.com/embed/4yEIZ9KZ_aQ?si=54H0t3B-I6u98rvO' },
  { id: 11, url: 'https://www.youtube.com/embed/c2M-rlkkT5o?si=3kLo5rJlVONy0_Zx' },
  { id: 12, url: 'https://www.youtube.com/embed/53eqvG3-1AM?si=x6Slna764eOa99UC' },
  { id: 13, url: 'https://www.youtube.com/embed/Z6CIv0b4whY?si=zjMtCPyS1i5ly3wr' },
  { id: 14, url: 'https://www.youtube.com/embed/ztHopE5Wnpc?si=bo78wwZvs4NI3Wsu' },
  { id: 15, url: 'https://www.youtube.com/embed/4cWkVbC2bNE?si=XXQIkPoEBfH_Stau' },
  { id: 16, url: 'https://www.youtube.com/embed/8QK_RNLFfZM?si=CEN87dk6lSG7MUGH' },
  { id: 17, url: 'https://www.youtube.com/embed/Q5aTUc7c4jg?si=5dE6ArIjrV6w956r' },
  { id: 18, url: 'https://www.youtube.com/embed/B3gJT3t8g4Q?si=IyOHiD6GbSlc-1Z2' },
  { id: 19, url: 'https://www.youtube.com/embed/dl00fOOYLOM?si=3ItThcOjjCuezDH8' },
  { id: 20, url: 'https://www.youtube.com/embed/fE-CRo749gM?si=q2o4El6AF_FHK0Tr' },
  { id: 21, url: 'https://www.youtube.com/embed/wzcb10_lQqA?si=qXvgOOsNO98aEVQl' },
  { id: 22, url: 'https://www.youtube.com/embed/W2Z7fbCLSTw?si=nJ5k9WUfkpTkLANf' },
  { id: 23, url: 'https://www.youtube.com/embed/zG6CHYCx6ag?si=cjwlBy9iaNipfzYY' },
  { id: 24, url: 'https://www.youtube.com/embed/QvTo1_-n0UE?si=g_kP7rm6mrFQn1Z3' }
],
SQL:[
 
    { id: 1, url: 'https://www.youtube.com/embed/QvTo1_-n0UE?si=g_kP7rm6mrFQn1Z3' },
    { id: 2, url: 'https://www.youtube.com/embed/53eqvG3-1AM?si=FkLHlNeJeZs2RPjA' },
    { id: 3, url: 'https://www.youtube.com/embed/hlGoQC332VM?si=f6dNWhf0XG1hhOYx' },
    { id: 4, url: 'https://www.youtube.com/embed/dl00fOOYLOM?si=3ItThcOjjCuezDH8' },
    { id: 5, url: 'https://www.youtube.com/embed/aUPVpIYiLCc?si=8vkQQsk_2CTpbhSK' },
    { id: 6, url: 'https://www.youtube.com/embed/4yEIZ9KZ_aQ?si=54H0t3B-I6u98rvO' },
    { id: 7, url: 'https://www.youtube.com/embed/wzcb10_lQqA?si=qXvgOOsNO98aEVQl' },
    { id: 8, url: 'https://www.youtube.com/embed/W2Z7fbCLSTw?si=nJ5k9WUfkpTkLANf' },
    { id: 9, url: 'https://www.youtube.com/embed/zsjvFFKOm3c?si=H770YADoyRqwR1_T' },
    { id: 10, url: 'https://www.youtube.com/embed/HXV3zeQKqGY?si=pS28UtUza9B8DxyX' },
    { id: 11, url: 'https://www.youtube.com/embed/7S_tz1z_5bA?si=SuEuCLEOi6CEkt5R' },
    { id: 12, url: 'https://www.youtube.com/embed/RQPpP2ywA9k?si=YaPbIkqqSBIWD0la' },
    { id: 13, url: 'https://www.youtube.com/embed/5VsNJXlJbMs?si=YslbpbISjTgjH4KT' },
    { id: 14, url: 'https://www.youtube.com/embed/5OdVJbNCSso?si=Nz4T3uoZUWDtqglH' },
    { id: 15, url: 'https://www.youtube.com/embed/Cz3WcZLRaWc?si=VdM25LGSDn1U3aNJ' },
    { id: 16, url: 'https://www.youtube.com/embed/KKgN_w71x3E?si=I9pzoiGVKKrGTZ_F' },
    { id: 17, url: 'https://www.youtube.com/embed/wALCw0F8e9M?si=V8EHRmJB-Fosfb6E' },
    { id: 18, url: 'https://www.youtube.com/embed/ER8oKX5myE0?si=28sM0GHxtnXtGhRW' },
    { id: 19, url: 'https://www.youtube.com/embed/wgRwITQHszU?si=gFPgXLlHvoH1yltb' },
    { id: 20, url: 'https://www.youtube.com/embed/RQPpP2ywA9k?si=vl5Gp_VX1ms3GIAe' },
    { id: 21, url: 'https://www.youtube.com/embed/3mukGYjvixE?si=LJf5nUORzvAWNfmr' },
    { id: 22, url: 'https://www.youtube.com/embed/KlWOr2RwqM4?si=2KwkgsQfvi9KOvy7' },
    { id: 23, url: 'https://www.youtube.com/embed/xiUTqnI6xk8?si=fgnHi3Y8zoQYqPGg' },
    { id: 24, url: 'https://www.youtube.com/embed/Hy3qbMAoEJk?si=ODFiiAmmcGEHA6j_' }
],
Cloud:[
  { "id": 1, "url": "https://www.youtube.com/embed/_a6us8kaq0g?si=oJm4zBYKWucCwK_G" },
  { "id": 2, "url": "https://www.youtube.com/embed/M988_fsOSWo?si=74GCPrF8Fsj_YZmv" },
  { "id": 3, "url": "https://www.youtube.com/embed/70oYrSnRgoI?si=V4HQTDcTj43iEp7q" },
  { "id": 4, "url": "https://www.youtube.com/embed/8C_kHJ5YEiA?si=bUJ4ZK0S1M6tnmTX" },
  { "id": 5, "url": "https://www.youtube.com/embed/lTOHWAlvoss?si=4o6xyHuWPXWNKIJE" },
  { "id": 6, "url": "https://www.youtube.com/embed/tqKGfCwk98I?si=yFMjGtioUM-Rf0zG" },
  { "id": 7, "url": "https://www.youtube.com/embed/N9kO4nnHOj4?si=1iaoBlIywDetMyH8" },
  { "id": 8, "url": "https://www.youtube.com/embed/pidVLkQQom8?si=PVTCUq4Sr3DGGt6M" },
  { "id": 9, "url": "https://www.youtube.com/embed/Bz5jfTRYacU?si=VPGb5vMlN4LjU-Q9" },
  { "id": 10, "url": "https://www.youtube.com/embed/eZeNIakuqbc?si=UNPZf_UmBfPD-ASj" },
  { "id": 11, "url": "https://www.youtube.com/embed/a9__D53WsUs?si=4CwhRR4rKnT11j9L" },
  { "id": 12, "url": "https://www.youtube.com/embed/B8i49C8fC3E?si=qsLqmdHf7nIkYDa6" },
  { "id": 13, "url": "https://www.youtube.com/embed/DaSt-5tTmG4?si=MbSJyt16f3znH_qN" },
  { "id": 14, "url": "https://www.youtube.com/embed/3XFODda6YXo?si=clccvAvel-q_fnCh" },
  { "id": 15, "url": "https://www.youtube.com/embed/NhDYbskXRgc?si=ZSfTehahXgxNDRCD" },
  { "id": 16, "url": "https://www.youtube.com/embed/WkJ0xB1dPwM?si=YQybtA3BdLU6Uyp9" },
  { "id": 17, "url": "https://www.youtube.com/embed/3Arj5zlUPG4?si=QdMAgCWci9eaYga9" },
  { "id": 18, "url": "https://www.youtube.com/embed/oPSHs71mTVU?si=DnLyDoRcfrsL5cWR" },
  { "id": 19, "url": "https://www.youtube.com/embed/YfZ0zk5Zzcw?si=szSOMT9V9Fcw1QeV" },
  { "id": 20, "url": "https://www.youtube.com/embed/ECnqartfjIM?si=ar1N01Y6IpbthoL-" },
  { "id": 21, "url": "https://www.youtube.com/embed/GAy9ChcM4Z0?si=uEo7DjMs9uZJevUp" },
  { "id": 22, "url": "https://www.youtube.com/embed/kg4tV1HOfns?si=OFux2oZnfyUbStg3" },
  { "id": 23, "url": "https://www.youtube.com/embed/D3m-YssjdsU?si=vohiQgusCEz-lD-3" },
  { "id": 24, "url": "https://www.youtube.com/embed/Aae1oWgtd_0?si=zCD1-d8YtGOoDdn8" }
],
AWS:[
  { "id": 1, "url": "https://www.youtube.com/embed/N9kO4nnHOj4?si=1iaoBlIywDetMyH8" },
  { "id": 2, "url": "https://www.youtube.com/embed/pidVLkQQom8?si=PVTCUq4Sr3DGGt6M" },
  { "id": 3, "url": "https://www.youtube.com/embed/Bz5jfTRYacU?si=VPGb5vMlN4LjU-Q9" },
  { "id": 4, "url": "https://www.youtube.com/embed/eZeNIakuqbc?si=UNPZf_UmBfPD-ASj" },
  { "id": 5, "url": "https://www.youtube.com/embed/a9__D53WsUs?si=4CwhRR4rKnT11j9L" },
  { "id": 6, "url": "https://www.youtube.com/embed/B8i49C8fC3E?si=qsLqmdHf7nIkYDa6" },
  { "id": 7, "url": "https://www.youtube.com/embed/DaSt-5tTmG4?si=MbSJyt16f3znH_qN" },
  { "id": 8, "url": "https://www.youtube.com/embed/3XFODda6YXo?si=clccvAvel-q_fnCh" },
  { "id": 9, "url": "https://www.youtube.com/embed/NhDYbskXRgc?si=ZSfTehahXgxNDRCD" },
  { "id": 10, "url": "https://www.youtube.com/embed/WkJ0xB1dPwM?si=YQybtA3BdLU6Uyp9" },
  { "id": 11, "url": "https://www.youtube.com/embed/hPQgZK2vo8c?si=y25mp0uPsLTWnC2x" },
  { "id": 12, "url": "https://www.youtube.com/embed/NqYjDQq9wQw?si=og5DViDTDRLkEy0W" },
  { "id": 13, "url": "https://www.youtube.com/embed/SaxWpnqoMZI?si=vQAZTpsCPb1rkS2P" },
  { "id": 14, "url": "https://www.youtube.com/embed/ULiPYBLcCiw?si=8SLdpEIcJVqMsisg" },
  { "id": 15, "url": "https://www.youtube.com/embed/NBFWgilq0EY?si=eZbVWX22YwdUU3dc" },
  { "id": 16, "url": "https://www.youtube.com/embed/gBCS931gKSU?si=hNkJmi6YH8Kkg8kU" },
  { "id": 17, "url": "https://www.youtube.com/embed/FvCt7GxvRDA?si=vAXKR9FHXzrfvmJc" },
  { "id": 18, "url": "https://www.youtube.com/embed/gBI02O5Gxiw?si=LmrdNRPMEFYjuPhf" }
],
Azure:[
  { "id": 16, "url": "https://www.youtube.com/embed/WkJ0xB1dPwM?si=YQybtA3BdLU6Uyp9" },
  { "id": 17, "url": "https://www.youtube.com/embed/3Arj5zlUPG4?si=QdMAgCWci9eaYga9" },
  { "id": 18, "url": "https://www.youtube.com/embed/oPSHs71mTVU?si=DnLyDoRcfrsL5cWR" },
  { "id": 19, "url": "https://www.youtube.com/embed/YfZ0zk5Zzcw?si=szSOMT9V9Fcw1QeV" },
  { "id": 20, "url": "https://www.youtube.com/embed/ECnqartfjIM?si=ar1N01Y6IpbthoL-" },
  { "id": 21, "url": "https://www.youtube.com/embed/GAy9ChcM4Z0?si=uEo7DjMs9uZJevUp" },
  { "id": 22, "url": "https://www.youtube.com/embed/kg4tV1HOfns?si=OFux2oZnfyUbStg3" },
  { "id": 23, "url": "https://www.youtube.com/embed/D3m-YssjdsU?si=vohiQgusCEz-lD-3" },
  { "id": 24, "url": "https://www.youtube.com/embed/Aae1oWgtd_0?si=zCD1-d8YtGOoDdn8" },
  { "id": 1, "url": "https://www.youtube.com/embed/N9kO4nnHOj4?si=1iaoBlIywDetMyH8" },
  { "id": 2, "url": "https://www.youtube.com/embed/pidVLkQQom8?si=PVTCUq4Sr3DGGt6M" },
  { "id": 3, "url": "https://www.youtube.com/embed/Bz5jfTRYacU?si=VPGb5vMlN4LjU-Q9" },
  { "id": 4, "url": "https://www.youtube.com/embed/eZeNIakuqbc?si=UNPZf_UmBfPD-ASj" },
  { "id": 5, "url": "https://www.youtube.com/embed/a9__D53WsUs?si=4CwhRR4rKnT11j9L" },
  { "id": 6, "url": "https://www.youtube.com/embed/B8i49C8fC3E?si=qsLqmdHf7nIkYDa6" },
],
React:[
  { "id": 2, "url": "https://www.youtube.com/embed/2sVeyo2tYbE?si=TBda_e6XerMBkpa7" },
  { "id": 3, "url": "https://www.youtube.com/embed/GVjIflROwJ4?si=8nV-zOxMKlWUz20D" },
  { "id": 3, "url": "https://www.youtube.com/embed/XxXyfkrP298?si=8R4ls2DV8dYrkJbS" },
  { "id": 3, "url": "https://www.youtube.com/embed//NfvtQ2p5QG4?si=BP_DeFFRmFzjbwBX" },
  { "id": 5, "url": "https://www.youtube.com/embed/cd3P3yXyx30?si=nWzQDz8aLHEUTWyW" },
  { "id": 5, "url": "https://www.youtube.com/embed/edBx-fjgh4k?si=qL8-VvNQjAs_vkSX" },
  { "id": 8, "url": "https://www.youtube.com/embed/bMknfKXIFA8?si=dl9HVpdAuxW3ZWD-" },
  { "id": 9, "url": "https://www.youtube.com/embed/ZF73dpgRrWI?si=TYBI1J9kHbu92a74" },
  { "id": 10, "url": "https://www.youtube.com/embed/LDB4uaJ87e0?si=THgOtzi0UGzR8ENo" },
  { "id": 5, "url": "https://www.youtube.com/embed/KkQATIXBY5w?si=M4rSb0YiqbktqzDm" },
  { "id": 8, "url": "https://www.youtube.com/embed/m0OMedQHBhc?si=k0l-LI-5LfOdUpK1" },
  { "id": 9, "url": "https://www.youtube.com/embed//7DrYVZxf25Q?si=nL4RW0epveo3s2uE" },
  { "id": 10, "url": "https://www.youtube.com/embed/myYlGLFxZas?si=lEVFkOa9YEtgKRSp" },
  { "id": 13, "url": "https://www.youtube.com/embed/Zb1zVeXLUf8?si=KH-tLhlPLEB2Y_xk" },
  { "id": 14, "url": "https://www.youtube.com/embed/82PXenL4MGg?si=81Np6BfS7kJqXev3" },
  { "id": 16, "url": "https://www.youtube.com/embed/RGKi6LSPDLU?si=ce-NOP0cKsG48s0j" },
  { "id": 16, "url": "https://www.youtube.com/embed/309beMyhXtg?si=VJ9VlEIUbsYXJISE"},
  { "id": 17, "url": "https://www.youtube.com/embed/5ZdHfJVAY-s?si=mDwqZpoOUxl8tCfm" },
  { "id": 18, "url": "https://www.youtube.com/embed/FHTbsZEJspU?si=CsWpaq5g2yHgT1jp" },
  { "id": 19, "url": "https://www.youtube.com/embed/gbocZlm71nE?si=NC6-4wXeL93KxASb" },
  { "id": 20, "url": "https://www.youtube.com/embed/9jRTo7ILxQc?si=-7o5Lr-nZ5hBTzr_" }
],
  "Node.js": [
    { "id": 1, "url": "https://www.youtube.com/embed/TlB_eWDSMt4?si=q3NKVa1TzAYkC8e2" },
    { "id": 2, "url": "https://www.youtube.com/embed/SdyzXQoQO18?si=3brvImzaku-GYQ40" },
    { "id": 3, "url": "https://www.youtube.com/embed/_LtwT5_zmDs?si=-7RISfcSR0PjY_1Y" },
    { "id": 4, "url": "https://www.youtube.com/embed/BLl32FvcdVM?si=GJX5icWZiI3HC-ko" },
    { "id": 5, "url": "https://www.youtube.com/embed/7hTtRfoAcLk?si=FnXIIQBvCLLPE-eI" },
    { "id": 6, "url": "https://www.youtube.com/embed/ENrzD9HAZK4?si=OLI4YKCTmRjuwSb3" },
    { "id": 7, "url": "https://www.youtube.com/embed/vJEO57B05Sg?si=tVe8fagON2xYfjW_" },
    { "id": 8, "url": "https://www.youtube.com/embed/ufHnsVixMEs?si=QdRH3zzBZpABJSQP" },
    { "id": 9, "url": "https://www.youtube.com/embed/LtARZCb8Cuw?si=7VUpd0l1oZt9aGFm" },
    { "id": 10, "url": "https://www.youtube.com/embed/yEHCfRWz-EI?si=occ-2qX6ZREz9jmj" },
    { "id": 11, "url": "https://www.youtube.com/embed/q-xS25lsN3I?si=-tQ5mh48Rf63zuRp" },
    { "id": 12, "url": "https://www.youtube.com/embed/FdaVsce3ftQ?si=nwk-TSEqrH8YtAC7" },
    { "id": 13, "url": "https://www.youtube.com/embed/ooBxSg1Cl1w?si=DJxHaLSOqOv-x9xq" },
    { "id": 14, "url": "https://www.youtube.com/embed/hiNqFhkyLgU?si=Md9tOY4576N4O4_2" },
    { "id": 15, "url": "https://www.youtube.com/embed/y0aTs56DJWk?si=r0_zPQJzGA71QbbO" },
    { "id": 16, "url": "https://www.youtube.com/embed/HgZMqVXQQbM?si=K70geTiLQgN3wApj" },
    { "id": 17, "url": "https://www.youtube.com/embed/bxuYDT-BWaI?si=iAIcxh0WtBcSywb0" },
    { "id": 18, "url": "https://www.youtube.com/embed/TlB_eWDSMt4?si=E4QjjbDs55gF0xk1" },
    { "id": 19, "url": "https://www.youtube.com/embed/ENrzD9HAZK4?si=kskNY-kS7gWW-P--" },
    { "id": 20, "url": "https://www.youtube.com/embed/8u1o-OmOeGQ?si=vfOSvz1SPghb1nzq" },
    { "id": 21, "url": "https://www.youtube.com/embed/_cNIsBTg8HA?si=s-rHvm-6I-wVLV8F" },

  ],
Angular:[
  { "id": 1, "url": "https://www.youtube.com/embed/MofsAODoNDs?si=7MIiilqk66hvUAux" },
  { "id": 2, "url": "https://www.youtube.com/embed/5xg4Jvqy_UI?si=gtDfNQ_B68mAYycQ" },
  { "id": 3, "url": "https://www.youtube.com/embed/Z08K7fma4AE?si=84-OlyPQaRlQp_2a" },
  { "id": 4, "url": "https://www.youtube.com/embed/k5E2AVpwsko?si=ezdxwF6ozgZOiF1r" },
  { "id": 5, "url": "https://www.youtube.com/embed/K9vBpIq8Wck?si=4ta7_cVR8qoferbJ" },
  { "id": 6, "url": "https://www.youtube.com/embed/3qBXWUpoPHo?si=E3tAY7e4oGftHWPv" },
  { "id": 7, "url": "https://www.youtube.com/embed/qZH84q5xnro?si=XPmuea3eQENA-OcY" },
  { "id": 8, "url": "https://www.youtube.com/embed/vpAJ0s5S2t0?si=Y0i0p9MvR9irzYy0" },
  { "id": 9, "url": "https://www.youtube.com/embed/0LhBvp8qpro?si=NJJ8LGsWI8fnSdgu" },
  { "id": 10, "url": "https://www.youtube.com/embed/SvRrCrv4uRI?si=2zD-J_XWY0pkpqnC" },
  { "id": 11, "url": "https://www.youtube.com/embed/MamE1c31Xyc?si=A_3czcHek0Xqj9dO" },
  { "id": 12, "url": "https://www.youtube.com/embed/G0bBLvWXBvc?si=1LYQbpQdfKEMPWJU" },
  { "id": 13, "url": "https://www.youtube.com/embed/Zb1zVeXLUf8?si=o6oqqHgyDCX8Rz4J" },
  { "id": 14, "url": "https://www.youtube.com/embed/psZXU8PTAS8?si=9nx3D26yPCpuj9pp" },
  { "id": 15, "url": "https://www.youtube.com/embed/hejR2GfFXiA?si=Oe15AH6996Zx2QVh" },
  { "id": 16, "url": "https://www.youtube.com/embed/mZdNkA9o7cY?si=cYVA-fp4iCbZVCvx" },
  { "id": 17, "url": "https://www.youtube.com/embed/JkcP06CYVpc?si=TS5TZhJbU9yMSFRg" },
  { "id": 18, "url": "https://www.youtube.com/embed/nGhKIC_7Mkk?si=_Ei_X3HhtMniNWjy" },
  { "id": 19, "url": "https://www.youtube.com/embed/UqHILyzcULE?si=gyETIJmeozYpbIyi" },
  { "id": 20, "url": "https://www.youtube.com/embed/SUeVdpV768o?si=EozUqraSAx4QqJWG" },
  { "id": 21, "url": "https://www.youtube.com/embed/9jRTo7ILxQc?si=UTdCltyqA0fBGcDT" },
  { "id": 22, "url": "https://www.youtube.com/embed/309beMyhXtg?si=x10d-ozGpMFQ-9ms" },
  { "id": 23, "url": "https://www.youtube.com/embed/OTjmnF27ADk?si=JxMIMgbEqy56LWH4" },
  { "id": 24, "url": "https://www.youtube.com/embed/m559BxR30ls?si=duK93BPfegVuRh4P" }
],

};

   useEffect(() => {
    // Get the videos based on category
    const categoryVideos = category === 'All' ? Object.values(videos).flat() : videos[category] || [];

    // Filter videos based on search query
    setFilteredVideos(
      categoryVideos.filter(video =>
        video.url.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [category, searchQuery]);

  return (
    <div className="video-category">
      <div className="video-grid">
        {filteredVideos.map(video => (
          <div key={video.id} className="video-item">
            <iframe 
              width="100%" 
              height="200" 
              src={video.url} 
              title="Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCategory;
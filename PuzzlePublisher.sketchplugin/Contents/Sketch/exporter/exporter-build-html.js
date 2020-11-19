
function buildMainHTML_NavigationIcons(options) {
    return '<div class="containerSVG"> <svg class="svgIcon"> \
    <symbol id="icMenu" viewBox="0 0 24 24"> \
        <path d="M4,14 C2.8954305,14 2,13.1045695 2,12 C2,10.8954305 2.8954305,10 4,10 C5.1045695,10 6,10.8954305 6,12 C6,13.1045695 5.1045695,14 4,14 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M20,14 C18.8954305,14 18,13.1045695 18,12 C18,10.8954305 18.8954305,10 20,10 C21.1045695,10 22,10.8954305 22,12 C22,13.1045695 21.1045695,14 20,14 Z" />\
    </symbol> \
    <symbol id="icArrwLeft" viewBox="0 0 24 24"> \
        <path d="M14.7071068,16.2928932 C15.0976311,16.6834175 15.0976311,17.3165825 14.7071068,17.7071068 C14.3165825,18.0976311 13.6834175,18.0976311 13.2928932,17.7071068 L8.29289322,12.7071068 C7.90236893,12.3165825 7.90236893,11.6834175 8.29289322,11.2928932 L13.2928932,6.29289322 C13.6834175,5.90236893 14.3165825,5.90236893 14.7071068,6.29289322 C15.0976311,6.68341751 15.0976311,7.31658249 14.7071068,7.70710678 L10.4142136,12 L14.7071068,16.2928932 Z" />\
    </symbol> \
    <symbol id="icArrwRight" viewBox="0 0 24 24"> \
        <path d="M15.7071068,16.2928932 C16.0976311,16.6834175 16.0976311,17.3165825 15.7071068,17.7071068 C15.3165825,18.0976311 14.6834175,18.0976311 14.2928932,17.7071068 L9.29289322,12.7071068 C8.90236893,12.3165825 8.90236893,11.6834175 9.29289322,11.2928932 L14.2928932,6.29289322 C14.6834175,5.90236893 15.3165825,5.90236893 15.7071068,6.29289322 C16.0976311,6.68341751 16.0976311,7.31658249 15.7071068,7.70710678 L11.4142136,12 L15.7071068,16.2928932 Z" transform="matrix(-1 0 0 1 25 0)" />\
    </symbol> \
    <symbol id="icHeart" viewBox="0 0 24 24">\
        <path fill="none" stroke="#404B58" stroke-width="2" d="M12,18.8536369 C17.3943819,16.1015046 20,12.9784118 20,9.5 C20,7.01471863 17.9852814,5 15.5,5 C14.4391705,5 13.4374107,5.36699819 12.6367778,6.02820949 L12,6.55409926 L11.3632222,6.02820949 C10.5625893,5.36699819 9.56082953,5 8.5,5 C6.01471863,5 4,7.01471863 4,9.5 C4,12.9784118 6.60561807,16.1015046 12,18.8536369 Z"/>\
    </symbol>\
     <symbol id="icPointer" viewBox="0 0 24 24">\
        <path d="M7.16743376,4.34579076 C7.66363057,3.87908025 8.39151976,3.755899 9.01365224,4.03335379 L9.01365224,4.03335379 L9.10700534,4.08777143 C9.63104823,4.47472439 10.0217699,5.01508408 10.2127512,5.60062907 C10.4917675,6.2824399 10.6779761,6.99862675 10.7637203,7.71100475 L10.7637203,7.71100475 L10.817,8.033 L10.870648,7.99008307 C10.9508584,7.93108653 11.0375587,7.87866583 11.130137,7.83371233 L11.130137,7.83371233 L11.2733366,7.7719939 C11.645598,7.65777539 12.0393934,7.63209308 12.4423174,7.7005808 C12.8744158,7.79091478 13.2571639,8.03945252 13.515467,8.3974312 L13.515467,8.3974312 L13.525,8.415 L13.5580532,8.38060854 C13.7375777,8.20417748 13.9573664,8.06689595 14.2126677,7.97661745 L14.2126677,7.97661745 L14.3700719,7.92815354 C14.7601243,7.85683728 15.1598757,7.85683728 15.6185326,7.94579813 C15.9857599,8.06856757 16.3070009,8.30005011 16.5396674,8.609557 L16.5396674,8.609557 L16.6043493,8.72458234 C16.6428414,8.82097976 16.6788016,8.91827539 16.7122125,9.01653061 L16.7122125,9.01653061 L16.726,9.06 L16.8208864,8.97721759 C16.9681747,8.85926223 17.1379522,8.76879133 17.3224355,8.71266304 L17.3224355,8.71266304 L17.4634337,8.67711323 C17.9896455,8.5711603 18.5324104,8.75398638 18.8872742,9.15672267 C19.242138,9.55945895 19.3551885,10.1209202 19.1838405,10.6296094 L19.2093224,10.5357799 L19.2090334,12.7610745 C19.1862391,13.1271355 19.1470105,13.4918634 19.0880685,13.8664949 L19.0224339,14.2448438 L18.9429284,14.6322922 C18.7541803,15.1823144 18.4914657,15.7040948 18.1217893,16.2343243 C17.6699093,16.7368429 17.2965379,17.3047439 17.0143136,17.9188042 L17.0363224,17.8727799 L17.0047955,18.0384429 C16.9929046,18.1111666 16.9833046,18.1844595 16.9760091,18.2584435 L16.9610493,18.4825906 L16.9599974,18.7116152 C16.9591372,18.9778721 16.9937268,19.2430586 17.0628545,19.5001867 C17.1426598,19.7970308 16.9382454,20.0949145 16.6325641,20.1272293 C16.1887579,20.1741459 15.7412421,20.1741459 15.2739714,20.1241858 C14.8192803,20.0542334 14.4188874,19.6281882 14.0808095,19.0818271 L14.0808095,19.0818271 L14.007,18.959 C13.6458971,19.5469161 13.2283691,20.0164429 12.7971825,20.133474 L12.7971825,20.133474 L12.6792804,20.1564734 C12.40804,20.1888603 12.1178623,20.1996559 11.5976025,20.1951344 L11.5976025,20.1951344 L10.2584286,20.169736 L9.48,20.16 C9.16840558,20.16 8.93270845,19.8780895 8.98790834,19.5714235 L8.98790834,19.5714235 L9.0027436,19.4616806 C9.02119919,19.2959265 9.02585489,19.1230993 9.00917907,18.9708257 C8.99125835,18.8071844 8.95160807,18.7033862 8.92009941,18.6757201 L8.92009941,18.6757201 L8.68126124,18.4610804 L7.73371165,17.5692523 L6.87532389,16.5869703 C6.7408966,16.4141352 6.12289613,15.3607699 5.76460288,14.7906072 L5.76460288,14.7906072 L5.62038404,14.5667312 C5.59696768,14.5332792 5.57867016,14.5070634 5.55981671,14.4808928 L5.55981671,14.4808928 L4.6386181,13.3268316 C4.38383819,13.0013876 4.22702059,12.7785585 4.13684781,12.6063498 L4.13684781,12.6063498 L4.05648317,12.4645383 C3.86064293,12.0784209 3.81297141,11.6326253 3.92414472,11.2219126 C4.14055922,10.3315035 4.98520633,9.74084121 5.93847381,9.84979299 C6.54529028,9.97169156 7.1029491,10.2691096 7.53281665,10.6960265 L7.53281665,10.6960265 L7.723,10.883 L7.6912417,10.723928 L7.64251772,10.5011802 C7.57779705,10.2174049 7.53759574,10.0512485 7.49682897,9.89744992 L7.49682897,9.89744992 L7.32963781,9.29184575 L7.04456938,8.13982119 C6.92154004,7.6413934 6.82477772,7.13684703 6.75976794,6.65834902 C6.61137215,5.91865308 6.7193326,5.15047299 7.06586723,4.48033484 L7.06586723,4.48033484 Z M8.50934031,4.91178804 C8.27952269,4.84813061 8.02983182,4.9074776 7.85256624,5.07420924 L7.91432244,5.02377994 L7.87117294,5.11837118 C7.74604513,5.42118721 7.68689523,5.74791709 7.69799852,6.08431903 L7.71312508,6.28720691 L7.81882079,6.96398474 C7.87322009,7.27747387 7.93828923,7.58776101 8.01328078,7.89178265 L8.01328078,7.89178265 L8.29601637,9.03471155 L8.44911047,9.58764732 L8.58001699,10.1158847 L8.67625156,10.548595 C8.75149962,10.9085229 8.81587907,11.2760953 8.87882633,11.6904775 L8.87882633,11.6904775 L8.97335261,12.3520537 C9.01060121,12.4927706 9.0255715,12.5703226 9.01950838,12.6680061 C9.00562698,12.8916511 9.00162999,12.9288159 8.65656558,13.0620472 L8.65656558,13.0620472 L8.43241435,13.1459443 C8.23545672,13.065262 8.18621731,13.0450914 8.15393215,13.0140564 L8.15393215,13.0140564 L8.08883861,12.9370646 L7.80233685,12.5590928 L7.5578657,12.2238297 L7.29668723,11.8970782 C7.15496439,11.7304554 7.00269692,11.5703689 6.83776679,11.4148687 C6.53749664,11.1168285 6.15631213,10.9135301 5.78418862,10.8368753 C5.37391601,10.7907916 4.99336072,11.0569141 4.892676,11.4704756 C4.83729564,11.6753474 4.87010001,11.8940432 5.00167451,12.1056421 L5.00167451,12.1056421 L5.03690334,12.1679323 C5.11596703,12.3004962 5.24732182,12.482014 5.44275702,12.7314353 L5.44275702,12.7314353 L5.92017745,13.3249945 L6.29953254,13.8026386 L6.44532166,14.0015976 C6.74304028,14.4457352 7.37243772,15.5180187 7.58358848,15.8552149 L7.58358848,15.8552149 L7.64628835,15.9507477 L8.44514313,16.8689487 L9.35653146,17.7235091 L9.57990059,17.9242799 C9.83717242,18.1501771 9.96070027,18.4735533 10.003236,18.8619643 C10.0118351,18.9404865 10.0168432,19.0197358 10.0187392,19.0991214 L10.0187392,19.0991214 L10.017,19.165 L11.2459156,19.1902367 C11.83561,19.2002217 12.1681116,19.1973958 12.4192519,19.177468 L12.4192519,19.177468 L12.5615794,19.1634247 C12.6170658,19.1568969 13.0000528,18.7092498 13.2226316,18.3267031 L13.2226316,18.3267031 L13.2778839,18.2314035 C13.4396915,17.9886975 13.7135208,17.8397056 14.01,17.8397056 C14.3435391,17.8397056 14.648412,18.0282734 14.789646,18.3118584 L14.789646,18.3118584 L14.8465822,18.411971 C15.047575,18.7505088 15.3490101,19.1240166 15.4025641,19.1327707 C15.5895219,19.1525347 15.7772609,19.1624167 15.965,19.1624167 L15.965,19.1624167 L15.985,19.161 L15.9680577,18.9804543 L15.9601727,18.7231423 C15.9502275,18.3449039 15.9880257,17.9669214 16.0726727,17.5981423 L16.0726727,17.5981423 L16.1056864,17.5011958 C16.429971,16.7956214 16.8589864,16.1430854 17.3379853,15.6167264 C17.61604,15.2123026 17.8377695,14.7719231 17.981188,14.3648199 C18.099272,13.8160386 18.1760798,13.2591823 18.21,12.73 L18.21,12.73 L18.21,10.47 L18.2361595,10.3103906 C18.2934615,10.1402752 18.2556553,9.95251178 18.136982,9.81782907 C18.0183088,9.68314635 17.8367978,9.62200582 17.6608226,9.6574385 C17.4848473,9.69287119 17.3411425,9.81949403 17.2838405,9.98960943 L17.2838405,9.98960943 L17.2333183,10.0960858 C17.2060315,10.1394966 17.1784846,10.1946376 17.1518918,10.2591212 C17.1098746,10.3610069 17.0769839,10.4664928 17.0409555,10.6029732 L17.0409555,10.6029732 L16.996796,10.7581274 L16.9595346,10.8379862 C16.9006729,10.9958359 16.8849765,11.0379292 16.5932412,10.9992882 L16.5932412,10.9992882 L16.1501329,10.9267917 C16.0348274,10.6676813 16.009204,10.6101012 16.0212304,10.6050553 C15.9848193,10.0869965 15.8682391,9.57772504 15.6756507,9.09541766 L15.7,9.162 L15.6694688,9.12668516 C15.5949633,9.04790444 15.511666,8.98482947 15.4387784,8.94442971 L15.4387784,8.94442971 L15.3700719,8.91184646 C15.098938,8.86227297 14.821062,8.86227297 14.5895196,8.90293341 C14.4230985,8.94756646 14.2774688,9.04887406 14.1777454,9.18938502 L14.2223224,9.13377994 L14.1675121,9.33868789 C14.1182734,9.53586776 14.0787072,9.73525859 14.0489695,9.93588797 L14.011754,10.2376394 L13.9893984,10.5405193 C13.9584597,11.1706655 13.0294935,11.1762842 12.9909347,10.5465584 L12.9909347,10.5465584 L12.9730784,10.2516986 C12.930789,9.77937294 12.8204225,9.3155109 12.6453027,8.87454375 L12.669,8.94 L12.6310282,8.89504189 C12.5518534,8.81362497 12.456908,8.75113321 12.3573482,8.71292346 L12.3573482,8.71292346 L12.2566634,8.6830061 C12.0262976,8.64406561 11.7900203,8.659475 11.5981215,8.71719666 C11.4132489,8.78768046 11.2781507,8.94899175 11.2402903,9.14805807 C11.2189407,9.25480644 11.2137839,9.47449295 11.224132,9.79681583 L11.224132,9.79681583 L11.25,10.55 C11.25,11.2056512 10.2721205,11.2219446 10.2502775,10.5666574 C10.2493885,10.539987 10.2483981,10.5176836 10.244244,10.482217 L10.244244,10.482217 L9.90052097,8.58822404 L9.77361364,7.85000483 C9.69594584,7.20750256 9.53236284,6.57833719 9.27496435,5.94601645 L9.27496435,5.94601645 L9.20787946,5.76867193 C9.05849627,5.42113224 8.81912344,5.11827389 8.51299466,4.89222857 L8.51732244,4.89577994 L8.557,4.928 Z M15.375,13 C15.5562184,13 15.707414,13.1282379 15.7423813,13.2987132 L15.75,13.3741092 L15.75,16.8258906 C15.75,17.0325054 15.5821068,17.1999998 15.375,17.1999998 C15.1937816,17.1999998 15.042586,17.0717619 15.0076187,16.9012866 L15,16.8258906 L15,13.3741092 C15,13.1674944 15.1678932,13 15.375,13 Z M13.3728388,13 C13.5540542,12.998966 13.7059881,13.1260313 13.7419398,13.2958993 L13.7499939,13.3710717 L13.7699939,16.8246259 C13.7711876,17.0307477 13.6042648,17.1988055 13.3971615,17.1999998 C13.2159461,17.2010338 13.0640121,17.0739685 13.0280605,16.9041005 L13.0200064,16.8289281 L13,13.3753739 C12.9988127,13.1692522 13.1657354,13.0011944 13.3728388,13 Z M11.3728136,13 C11.5540289,12.998944 11.7059714,13.127215 11.7419346,13.2987061 L11.7499938,13.3745973 L11.7699938,16.8210084 C11.7712014,17.0291026 11.6042899,17.1987799 11.3971867,17.1999998 C11.2159713,17.2010558 11.0640288,17.0727848 11.0280657,16.9012937 L11.0200065,16.8254025 L11,13.3789914 C10.9987989,13.1708972 11.1657103,13.0012199 11.3728136,13 Z" />\
    </symbol>\
    <symbol id="icAnnotation" viewBox="0 0 24 24">\
        <path d="M5,16 L13,16 C13.5522847,16 14,16.4477153 14,17 C14,17.5522847 13.5522847,18 13,18 L5,18 C4.44771525,18 4,17.5522847 4,17 C4,16.4477153 4.44771525,16 5,16 Z M5,6 L19,6 C19.5522847,6 20,6.44771525 20,7 C20,7.55228475 19.5522847,8 19,8 L5,8 C4.44771525,8 4,7.55228475 4,7 C4,6.44771525 4.44771525,6 5,6 Z M5,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 Z" />\
    </symbol>\
    <symbol id="icEmbed" viewBox="0 0 24 24">\
        <path d="M6.7080808,14.2938686 C7.09806642,14.6849308 7.09719364,15.3180952 6.70613141,15.7080808 C6.31506919,16.0980664 5.68190481,16.0971936 5.2919192,15.7061314 L2.2919192,12.6978494 C1.90193253,12.3067862 1.90280651,11.6736197 2.29387128,11.2836345 L5.29387128,8.29191651 C5.684935,7.90193238 6.31809937,7.90280757 6.70808349,8.29387128 C7.09806762,8.684935 7.09719243,9.31809937 6.70612872,9.70808349 L4.41421491,11.9936701 L6.7080808,14.2938686 Z M17.2938713,9.70808349 C16.9028076,9.31809937 16.9019324,8.684935 17.2919165,8.29387128 C17.6819006,7.90280757 18.315065,7.90193238 18.7061287,8.29191651 L21.7061287,11.2836345 C22.0971935,11.6736197 22.0980675,12.3067862 21.7080808,12.6978494 L18.7080808,15.7061314 C18.3180952,16.0971936 17.6849308,16.0980664 17.2938686,15.7080808 C16.9028064,15.3180952 16.9019336,14.6849308 17.2919192,14.2938686 L19.5857851,11.9936701 L17.2938713,9.70808349 Z M13.0513167,5.68377223 C13.2259645,5.15982892 13.7922844,4.87666893 14.3162278,5.0513167 C14.8401711,5.22596447 15.1233311,5.79228445 14.9486833,6.31622777 L10.9486833,18.3162278 C10.7740355,18.8401711 10.2077156,19.1233311 9.68377223,18.9486833 C9.15982892,18.7740355 8.87666893,18.2077156 9.0513167,17.6837722 L13.0513167,5.68377223 Z" />\
    </symbol>\
    <symbol id="icGrid" viewBox="0 0 24 24"> \
        <path d="M12,17 C13.1045695,17 14,17.8954305 14,19 C14,20.1045695 13.1045695,21 12,21 C10.8954305,21 10,20.1045695 10,19 C10,17.8954305 10.8954305,17 12,17 Z M18.5,17 C19.3284271,17 20,17.6715729 20,18.5 C20,19.3284271 19.3284271,20 18.5,20 C17.6715729,20 17,19.3284271 17,18.5 C17,17.6715729 17.6715729,17 18.5,17 Z M5.5,17 C6.32842712,17 7,17.6715729 7,18.5 C7,19.3284271 6.32842712,20 5.5,20 C4.67157288,20 4,19.3284271 4,18.5 C4,17.6715729 4.67157288,17 5.5,17 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M19,10 C20.1045695,10 21,10.8954305 21,12 C21,13.1045695 20.1045695,14 19,14 C17.8954305,14 17,13.1045695 17,12 C17,10.8954305 17.8954305,10 19,10 Z M5,10 C6.1045695,10 7,10.8954305 7,12 C7,13.1045695 6.1045695,14 5,14 C3.8954305,14 3,13.1045695 3,12 C3,10.8954305 3.8954305,10 5,10 Z M12,3 C13.1045695,3 14,3.8954305 14,5 C14,6.1045695 13.1045695,7 12,7 C10.8954305,7 10,6.1045695 10,5 C10,3.8954305 10.8954305,3 12,3 Z M18.5,4 C19.3284271,4 20,4.67157288 20,5.5 C20,6.32842712 19.3284271,7 18.5,7 C17.6715729,7 17,6.32842712 17,5.5 C17,4.67157288 17.6715729,4 18.5,4 Z M5.5,4 C6.32842712,4 7,4.67157288 7,5.5 C7,6.32842712 6.32842712,7 5.5,7 C4.67157288,7 4,6.32842712 4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z" />\
    </symbol>\
    <symbol id="icClose" viewBox="0 0 24 24">\
      <path d="M10.5857864,12 L7.29289322,8.70710678 C6.90236893,8.31658249 6.90236893,7.68341751 7.29289322,7.29289322 C7.68341751,6.90236893 8.31658249,6.90236893 8.70710678,7.29289322 L12,10.5857864 L15.2928932,7.29289322 C15.6834175,6.90236893 16.3165825,6.90236893 16.7071068,7.29289322 C17.0976311,7.68341751 17.0976311,8.31658249 16.7071068,8.70710678 L13.4142136,12 L16.7071068,15.2928932 C17.0976311,15.6834175 17.0976311,16.3165825 16.7071068,16.7071068 C16.3165825,17.0976311 15.6834175,17.0976311 15.2928932,16.7071068 L12,13.4142136 L8.70710678,16.7071068 C8.31658249,17.0976311 7.68341751,17.0976311 7.29289322,16.7071068 C6.90236893,16.3165825 6.90236893,15.6834175 7.29289322,15.2928932 L10.5857864,12 Z" transform="rotate(-90 12 12)" />\
    </symbol>\
    <symbol id="icBack" viewBox="0 0 24 24">\
      <path d="M8.36500685,12.7725895 C8.14212731,12.5891835 8,12.3112069 8,12.0000346 C8,11.7624738 8.08283717,11.5442607 8.22120202,11.3727048 L8.22132741,11.3368041 L12.2213274,6.37260414 C12.5678477,5.94255515 13.1973815,5.87484175 13.6274305,6.22136203 C14.0574795,6.56788232 14.1251929,7.1974161 13.7786726,7.6274651 L11.0611595,11.0000346 L19,11.0000346 C19.5522847,11.0000346 20,11.4477499 20,12.0000346 C20,12.5523194 19.5522847,13.0000346 19,13.0000346 L11.0998289,13.0000346 L13.7830365,16.3780588 C14.1265442,16.8105179 14.0544349,17.4395633 13.6219758,17.7830711 C13.1895167,18.1265788 12.5604713,18.0544695 12.2169635,17.6220104 L8.36500685,12.7725895 Z M5,6.00003462 C5.55228475,6.00003462 6,6.44774987 6,7.00003462 L6,17.0000346 C6,17.5523194 5.55228475,18.0000346 5,18.0000346 C4.44771525,18.0000346 4,17.5523194 4,17.0000346 L4,7.00003462 C4,6.44774987 4.44771525,6.00003462 5,6.00003462 Z" />\
    </symbol>\
    <symbol id="icResize" viewBox="0 0 24 24">\
      <path d="M15.5857864,7 L13,7 C12.4477153,7 12,6.55228475 12,6 C12,5.44771525 12.4477153,5 13,5 L18,5 C18.5522847,5 19,5.44771525 19,6 L19,11 C19,11.5522847 18.5522847,12 18,12 C17.4477153,12 17,11.5522847 17,11 L17,8.41421356 L14.7071068,10.7071068 C14.3165825,11.0976311 13.6834175,11.0976311 13.2928932,10.7071068 C12.9023689,10.3165825 12.9023689,9.68341751 13.2928932,9.29289322 L15.5857864,7 Z M7,15.5857864 L9.29289322,13.2928932 C9.68341751,12.9023689 10.3165825,12.9023689 10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 L8.41421356,17 L11,17 C11.5522847,17 12,17.4477153 12,18 C12,18.5522847 11.5522847,19 11,19 L6,19 C5.44771525,19 5,18.5522847 5,18 L5,13 C5,12.4477153 5.44771525,12 6,12 C6.55228475,12 7,12.4477153 7,13 L7,15.5857864 Z" />\
    </symbol>\
    <symbol id="icGridLayout" viewBox="0 0 24 24">\
      <path d="M6.07692308,5 C5.48215488,5 5,5.44771525 5,6 L5,17 C5,17.5522847 5.48215488,18 6.07692308,18 L17.9230769,18 C18.5178451,18 19,17.5522847 19,17 L19,6 C19,5.44771525 18.5178451,5 17.9230769,5 L6.07692308,5 Z M6.17647059,3 L17.8235294,3 C19.5778457,3 21,4.34314575 21,6 L21,17 C21,18.6568542 19.5778457,20 17.8235294,20 L6.17647059,20 C4.42215432,20 3,18.6568542 3,17 L3,6 C3,4.34314575 4.42215432,3 6.17647059,3 Z M14,5 L16,5 L16,18 L14,18 L14,5 Z M8,5 L10,5 L10,18 L8,18 L8,5 Z" />\
    </symbol>\
    <symbol id="icElementInspector" viewBox="0 0 24 24">\
      <path d="M6,5 C5.40294373,5 5,5.41327562 5,6 L5,18 C5,18.5867244 5.40294373,19 6,19 L9,19 L9,5 L6,5 Z M6,3 L9,3 L9,21 L6,21 C4.22104159,21 3,19.7358628 3,18 L3,6 C3,4.26413718 4.22104159,3 6,3 Z M12,1 C12.5522847,1 13,1.44771525 13,2 L13,22 C13,22.5522847 12.5522847,23 12,23 C11.4477153,23 11,22.5522847 11,22 L11,2 C11,1.44771525 11.4477153,1 12,1 Z M15,3 L17,3 L17,5 L15,5 L15,3 Z M19,7 L21,7 L21,9 L19,9 L19,7 Z M19,11 L21,11 L21,13 L19,13 L19,11 Z M19,15 L21,15 L21,17 L19,17 L19,15 Z M15,19 L17,19 L17,21 L15,21 L15,19 Z M19,19 L21,19 C21,20.1045695 20.1045695,21 19,21 L19,19 Z M19,3 C20.1045695,3 21,3.8954305 21,5 L19,5 L19,3 Z" />\
    </symbol>\
    <symbol id="icVersionInspector" viewBox="0 0 24 24">\
      <path d="M6,5 C5.40294373,5 5,5.41327562 5,6 L5,18 C5,18.5867244 5.40294373,19 6,19 L9,19 L9,5 L6,5 Z M6,3 L9,3 L9,21 L6,21 C4.22104159,21 3,19.7358628 3,18 L3,6 C3,4.26413718 4.22104159,3 6,3 Z M12,1 C12.5522847,1 13,1.44771525 13,2 L13,22 C13,22.5522847 12.5522847,23 12,23 C11.4477153,23 11,22.5522847 11,22 L11,2 C11,1.44771525 11.4477153,1 12,1 Z M15,3 L17,3 L17,5 L15,5 L15,3 Z M19,7 L21,7 L21,9 L19,9 L19,7 Z M19,11 L21,11 L21,13 L19,13 L19,11 Z M19,15 L21,15 L21,17 L19,17 L19,15 Z M15,19 L17,19 L17,21 L15,21 L15,19 Z M19,19 L21,19 C21,20.1045695 20.1045695,21 19,21 L19,19 Z M19,3 C20.1045695,3 21,3.8954305 21,5 L19,5 L19,3 Z" />\
    </symbol>\
    <symbol id="icIncreaseVersion" viewBox="0 0 24 24">\
      <path d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M11.3086198,9.29124083 C11.7000598,8.90162823 12.333229,8.90311306 12.7228373,9.29455727 L12.7228373,9.29455727 L15.7087669,12.2945573 C16.0983722,12.6859984 16.0968839,13.3191617 15.7054427,13.7087669 C15.3140016,14.0983722 14.6808383,14.0968839 14.2912331,13.7054427 L14.2912331,13.7054427 L12.0107539,11.4142175 L9.70545052,13.7087592 C9.31401364,14.0983687 8.6808504,14.0968874 8.29124083,13.7054505 C7.90163127,13.3140136 7.9031126,12.6808504 8.29454948,12.2912408 L8.29454948,12.2912408 Z" />\
    </symbol>\
    <symbol id="icDecreaseVersion" viewBox="0 0 24 24">\
      <path d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M8.29124083,10.2945495 C8.6808504,9.9031126 9.31401364,9.90163127 9.70545052,10.2912408 L9.70545052,10.2912408 L12.0107539,12.5857825 L14.2912331,10.2945573 C14.6808383,9.90311611 15.3140016,9.90162781 15.7054427,10.2912331 C16.0968839,10.6808383 16.0983722,11.3140016 15.7087669,11.7054427 L15.7087669,11.7054427 L12.7228373,14.7054427 C12.333229,15.0968869 11.7000598,15.0983718 11.3086198,14.7087592 L11.3086198,14.7087592 L8.29454948,11.7087592 C7.9031126,11.3191496 7.90163127,10.6859864 8.29124083,10.2945495 Z" />\
    </symbol>\
    <symbol id="icCloseBtn" viewBox="0 0 24 24">\
      <path fill="#FFFFFF" d="M4.29289322,4.29289322 C4.68341751,3.90236893 5.31658249,3.90236893 5.70710678,4.29289322 L5.70710678,4.29289322 L12,10.585 L18.2928932,4.29289322 C18.6533772,3.93240926 19.2206082,3.90467972 19.6128994,4.20970461 L19.7071068,4.29289322 C20.0976311,4.68341751 20.0976311,5.31658249 19.7071068,5.70710678 L19.7071068,5.70710678 L13.415,12 L19.7071068,18.2928932 C20.0675907,18.6533772 20.0953203,19.2206082 19.7902954,19.6128994 L19.7071068,19.7071068 C19.3165825,20.0976311 18.6834175,20.0976311 18.2928932,19.7071068 L18.2928932,19.7071068 L12,13.415 L5.70710678,19.7071068 C5.34662282,20.0675907 4.77939176,20.0953203 4.38710056,19.7902954 L4.29289322,19.7071068 C3.90236893,19.3165825 3.90236893,18.6834175 4.29289322,18.2928932 L4.29289322,18.2928932 L10.585,12 L4.29289322,5.70710678 C3.93240926,5.34662282 3.90467972,4.77939176 4.20970461,4.38710056 Z" />\
    </symbol>\
    </svg></div>\n';
}

function buildMainHTML(options) {

    const verPostfix = "?" + Constants.DOCUMENT_VERSION_PLACEHOLDER
    const manifest = exporter.getManifest()

    let s = "";
    s += '<!DOCTYPE html>\n<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n';
    s += '<meta name="generator" content="Generated using Puzzle Publisher ' + manifest.version + ' plugin for Sketch.app - https://github.com/ingrammicro/puzzle-publisher">\n';
    s += '<title>' + options.docName + '</title>\n';
    s += '<link rel="shortcut icon"  type="image/png?" href="resources/icon.png' + verPostfix + '">\n';
    // s += '<link rel="mask-icon" href="https://sketch.cloud/favicon.svg?v=4" color="rgb(252, 177, 0)">\n';
    s += '<link rel="stylesheet" type="text/css" href="resources/viewer.css' + verPostfix + '">\n';
    if (options.enableAnimations) {
        s += '<link rel="stylesheet" type="text/css" href="resources/animations.css' + verPostfix + '">\n';
    }
    if (options.centerContent) {
        s += '<link rel="stylesheet" type="text/css" href="resources/viewer-center.css' + verPostfix + '">\n';
    } else {
        s += '<link rel="stylesheet" type="text/css" href="resources/viewer-top.css' + verPostfix + '">\n';
    }
    if (undefined != options.cssFileNames) {
        options.cssFileNames.forEach(function (cssFile) {
            s += '<link rel="stylesheet" type="text/css" href="resources/' + cssFile + verPostfix + '">\n';
        })
    }
    s += '<script type="text/javascript" src="resources/jquery-3.3.1.min.js" charset="UTF-8"></script>\n';
    //  s += '<script type="text/javascript" src="resources/jquery-migrate-1.4.1.min.js" charset="UTF-8"></script>\n';
    s += '<script type="text/javascript" src="resources/jquery.hotkeys.js" charset="UTF-8"></script>\n';
    s += '<script type="text/javascript" src="resources/jquery.ba-hashchange.min.js" charset="UTF-8"></script>\n';
    s += '<script type="text/javascript" src="viewer/viewer-page.js' + verPostfix + '" charset="UTF-8"></script>\n';
    s += '<script type="text/javascript" src="viewer/story.js' + verPostfix + '" charset="UTF-8"></script>\n';
    s += '<script type="text/javascript" src="viewer/viewer.js' + verPostfix + '" charset="UTF-8"></script>\n';
    s += '<script type="text/javascript" src="viewer/AbstractViewer.js' + verPostfix + '" charset="UTF-8"></script>\n';
    s += '<script type="text/javascript" src="viewer/GalleryViewer.js' + verPostfix + '" charset="UTF-8"></script>\n';
    if (options.loadLayers) {
        s += '<script type="text/javascript" src="viewer/LayersData.js' + verPostfix + '" charset="UTF-8"></script>\n';
        s += '<script type="text/javascript" src="viewer/SymbolViewer.js' + verPostfix + '" charset="UTF-8"></script>\n';
        s += '<link rel="stylesheet" type="text/css" href="resources/viewer-fonts.css' + verPostfix + '">\n';
    }
    s += '<script type="text/javascript" src="viewer/VersionViewer.js' + verPostfix + '" charset="UTF-8"></script>\n';
    if (options.commentsURL != '') {
        s += '<link rel="stylesheet" type="text/css" href="' + options.commentsURL + '/EasyPageComments.css' + verPostfix + '"/>\n';
        s += '<script type="text/javascript" src="' + options.commentsURL + '/EasyPageComments.js' + verPostfix + '"></script>\n';
        s += '<script type="text/javascript" src="' + options.commentsURL + '/comments.js' + verPostfix + '" charset="UTF-8"></script>\n';
    }
    s += '<script type="text/javascript">\n';
    if (options.jsCode != '') {
        s += 'function runJSCode(){' + options.jsCode + '}\n'
    }
    s += '  var viewer = createViewer(story, "images");\n';
    if (options.commentsURL != '') {
        s += '  var comments = createComments();\n';
    }
    s += '</script>\n';

    if (options.googleCode != '') {
        if (options.googleCode.startsWith("GTM")) {
            let code = `
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','<CODE>');</script>
<!-- End Google Tag Manager -->`
            s += code.replace("<CODE>", options.googleCode)
        } else {
            s += "<!-- Global site tag (gtag.js) - Google Analytics -->\n"
            s += "<script async src='https://www.googletagmanager.com/gtag/js?id=" + options.googleCode + "'></script>\n"
            s += "<script>\n"
            s += " window.dataLayer = window.dataLayer || [];\n"
            s += " function gtag(){dataLayer.push(arguments);}\n"
            s += " gtag('js', new Date());\n"
            s += "gtag('config', '" + options.googleCode + "');\n"
            s += "</script>\n"
        }
    }
    s += `
<script>
    function copyToBuffer(elID) {        
        var copyText = document.getElementById(elID);

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(copyText).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }
    function showFAIconInfo(code){
        window.open("https://fontawesome.com/icons?d=gallery&q="+code,"_blank")
    }                         
</script > `
    s += '<!--HEAD_INJECT-->\n'
    s += '</head>\n'
    s += '<body class="screen" '
    if (options.jsCode != '') {
        s += ' onload="runJSCode()" '
    }
    s += 'style="background:' + options.backColor + '">\n'

    if (options.googleCode != '') {
        if (options.googleCode.startsWith("GTM")) {
            let code = `
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<CODE>"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->`
            s += code.replace("<CODE>", options.googleCode)
        }
    }

    s += buildMainHTML_NavigationIcons(options)
    //s += `<input id="__focusInput" type="text" style="width:0px;height:0px;"/><script>$( "#__focusInput" ).focus()</script>`
    s += '<!-- load indicator -->\n';
    s += '<div id="loading" >\n';
    s += '\
    <div class="shaft1"></div><div class="shaft2"></div><div class="shaft3"></div>\
    <div class="shaft4"></div><div class="shaft5"></div><div class="shaft6"></div><div class="shaft7"></div>\
  </div>    \
  <!--/load indicator-->\
     <div id="container">\
        <div id="marker"></div>\
        <div id="content" onclick="viewer.onContentClick()"></div>\
        <div id="sidebar" class="hidden">\
            <div id="symbol_viewer" class="hidden">\
                <div class="title">\
                  <div style="width:100%;">Element Inspector</div>\
                  <div style="width:24px; height:24px; cursor: pointer;" onclick="viewer.symbolViewer.toggle();  return false;">\
                    <svg class="svgIcon"><use xlink:href="#icClose"></use></svg>\
                  </div>\
                </div>\
                <div class="checkbox-container" style="margin-top:62px;">\
                  <input type="checkbox" id="symbol_viewer_symbols" />\
                  <label for="symbol_viewer_symbols"></label>\
                  <span class="checkbox-label">Show symbols&nbsp;&nbsp;</span>\
                  <select id="lib_selector" style="width:200px;display:none;"></select>\
                </div>\
                <div id="empty" style="padding: 16px 20px 0 20px;margin-top:20px;">Click any element to inspect</div>\
                <div id="symbol_viewer_content" style="margin-top:20px;">\
                </div>\
            </div>\
             <div id="version_viewer" class="hidden">\
                <div class="title">\
                  <div style="width:100%;">Version Inspector</div>\
                  <div style="width:24px; height:24px; cursor: pointer;" onclick="viewer.versionViewer.toggle();  return false;">\
                    <svg class="svgIcon"><use xlink:href="#icClose"></use></svg>\
                  </div>\
                </div>\
            <div style="padding: 72px 20px 0 20px">\
                   Mode:<br />\
                  <input type="radio" name="version_viewer_mode" id="version_viewer_mode_diff" value="diff" checked onclick="viewer.versionViewer.pageChanged()" disabled /><label for="version_viewer_mode_diff">Differences</label><br />\
                  <input type="radio" name="version_viewer_mode" id="version_viewer_mode_prev" value="prev" onclick="viewer.versionViewer.pageChanged()" disabled><label for="version_viewer_mode_prev">Prev version</label><br />\
                  <input type="radio" name="version_viewer_mode" id="version_viewer_mode_new" value="new" onclick="viewer.versionViewer.pageChanged()" disabled><label for="version_viewer_mode_new">New version</label><br />\
                </div>\
                <div id="version_viewer_content" style="padding: 72px 20px 0 20px"></div>\
            </div>\
        </div>\
    <div id="content-shadow" class="hidden" onclick="viewer.onContentClick()"></div>\
    <div id="content-modal" class="contentModal hidden" onclick="viewer.onModalClick()"></div>\
    ';
    if (options.commentsURL != '') {
        s += ' <div id="commenting" class="hidden">\n';
        s += '  <h1>EasyPageComments example page</h1>\n';
        s += '  <h2>Comments</h2>\n';
        s += '  <div id="Comments"></div>\n';
        s += '    <h2>Leave a comment</h2>\n';
        s += '  <div id="CommentForm"></div>\n';
        s += ' </div>\n';
    }

    s += '        <div id="gallery-modal" class="hidden">\n';
    s += '          <div id="gallery-header">\n';
    s += '            <div id="gallery-header-container">\n';
    s += '              <div id="title"><div>' + options.docName + '</div><div id="screensamount"></div></div>\n';
    s += '              <div id="controls">\n';
    s += '                 <input type="checkbox" id="galleryShowMap" onclick="viewer.galleryViewer.enableMapMode(this.checked)"/><label for="galleryShowMap">Show map (M)</label>\n';
    s += '              <div id="mapControls" style="display:none">\n';
    s += '                 <input type="range" min="0" max="100" value="50" class="mapZoom" onclick="viewer.galleryViewer.mapZoomChanged(this.value)">\n';
    s += '                 <span onclick="viewer.galleryViewer.resetMapZoom();return false;" class="mapResetZoom">Reset zoom</span>\n';
    s += '                 <input type="checkbox" id="galleryShowMapLinks" onclick="viewer.galleryViewer.showMapLinks(this.checked)"/><label for="galleryShowMapLinks">Show all links (L)</label>\n';
    s += '              </div>\n';
    s += '              </div>\n';
    s += '              <div id="search"><input type="text" placeholder="Search screen..." id="searchInput" onkeyup="searchScreen()"></div>\n';
    s += '              <div id="closebtn" onclick="viewer.galleryViewer.hide(); return false;"><svg class="svgIcon"><use xlink:href="#icCloseBtn"></use></svg></div>\n';
    s += '            </div>\n';
    s += '          </div>\n';
    s += '          <div id="gallery"><div id="grid"></div></div>\n';
    s += '        </div>\n';

    s += "    <div id=\"nav\" class=\"" + (options.hideNav ? "hidden" : "nav") + "\">";
    s += "            <div class=\"navLeft\">";
    s += "                <div id=\"menu\" class=\"menu\">";
    s += "                            <div class=\"groupe\">";
    s += "                                <div id=\"links\" class=\"item\" onclick=\"viewer.toggleLinks(); addRemoveClass('class','menu','active'); return false;\">";
    s += "                                    <svg class='svgIcon'><use xlink:href=\"#icPointer\"><\/use><\/svg>";
    s += "                                    <span>Hot Spots<\/span>";
    s += "                                    <div class=\"tips\">⇧<\/div>";
    s += "                                <\/div>";
    s += "                                <div  id=\"zoom\" class=\"item\" onclick=\"viewer.toggleZoom(); addRemoveClass('class','menu','active'); return false;\">";
    s += "                                    <svg class='svgIcon'><use xlink:href=\"#icResize\"><\/use><\/svg>";
    s += "                                    <span>Toogle Auto-Scale<\/span>";
    s += "                                    <div class=\"tips\">Z<\/div>";
    s += "                                <\/div>";
    s += "                                <div  id=\"embed\" class=\"item\" onclick=\"addRemoveClass('class','menu','active'); viewer.share();  return false;\">";
    s += "                                    <svg class='svgIcon'><use xlink:href=\"#icEmbed\"><\/use><\/svg>";
    s += "                                    <span>Show Embed Code<\/span>";
    s += "                                    <div class=\"tips\">E<\/div>";
    s += "                                <\/div>";
    s += "                                <div  id=\"grid\" class=\"item\" onclick=\"addRemoveClass('class','menu','active'); viewer.toogleLayout();  return false;\">";
    s += "                                    <svg class='svgIcon'><use xlink:href=\"#icGridLayout\"><\/use><\/svg>";
    s += "                                    <span>Toogle Grid Layout<\/span>";
    s += "                                    <div class=\"tips\">L<\/div>";
    s += "                                <\/div>";
    if (options.loadLayers) {
        s += "                            <div  id=\"symbols\"  class=\"item\" onclick=\"addRemoveClass('class','menu','active'); viewer.symbolViewer.toggle();  return false;\">";
        s += "                                <svg class='svgIcon'><use xlink:href=\"#icElementInspector\"><\/use><\/svg>";
        s += "                                <span>Elements Inspector<\/span>";
        s += "                                <div class=\"tips\">M<\/div>";
        s += "                            <\/div>";
    }
    s += "                                <div id=\"menu_version_viewer\" class=\"hidden item\" onclick=\"addRemoveClass('class','menu','active'); viewer.versionViewer.toggle();  return false;\">";
    s += "                                    <svg class='svgIcon'><use xlink:href=\"#icVersionInspector\"><\/use><\/svg>";
    s += "                                    <span>Version Inspector<\/span>";
    s += "                                    <div class=\"tips\">V<\/div>";
    s += "                                <\/div>";
    /*
    s += "                                <div class=\"item disabled\" onclick=\"addRemoveClass('class','annotation','active'); addRemoveClass('class','menu','active');\">";
    s += "                                    <svg class='svgIcon'><use xlink:href=\"#icAnnotation\"><\/use><\/svg>";
    s += "                                    <span>Annotation<\/span>";
    s += "                                    <div class=\"tips\">⌘A<\/div>";
    s += "                                <\/div>";
    */
    if (options.commentsURL != '') {
        s += "                                <div class=\"item\" onclick=\"comments.switch(); return false;\">";
        s += "                                    <svg class='svgIcon'><use xlink:href=\"#icAnnotation\"><\/use><\/svg>";
        s += "                                    <span>Comments<\/span>";
        s += "                                <\/div>";
    }
    s += "                            <\/div>";
    if (options.serverTools != '') {
        s += "                            <hr>";
        s += "                            <div class=\"groupe\">";
        s += "                                <div class=\"item\" onclick=\"viewer.increaseVersion(); addRemoveClass('class','menu','active'); return false;\">";
        s += "                                    <svg class='svgIcon'><use xlink:href=\"#icIncreaseVersion\"><\/use><\/svg>";
        s += "                                    <span>Version Up<\/span>";
        s += "                                    <div class=\"tips\">⇧ ↑<\/div>";
        s += "                                <\/div>";
        s += "                                <div class=\"item\" onclick=\"viewer.decreaseVersion(); addRemoveClass('class','menu','active'); return false;\">";
        s += "                                    <svg class='svgIcon'><use xlink:href=\"#icDecreaseVersion\"><\/use><\/svg>";
        s += "                                    <span>Version Down<\/span>";
        s += "                                    <div class=\"tips\">⇧ ↓<\/div>";
        s += "                                <\/div>";
        s += "                            <\/div>";
    }
    s += "                            <hr>";
    s += "                            <div  id=\"viewall\" class=\"groupe\">";
    s += "                                <div class=\"item\" onclick=\"viewer.galleryViewer.show(); addRemoveClass('class','menu','active'); return false;\">";
    s += "                                    <svg class='svgIcon'><use xlink:href=\"#icGrid\"><\/use><\/svg>";
    s += "                                    <span>View All Screens<\/span>";
    s += "                                    <div class=\"tips\">G<\/div>";
    s += "                                <\/div>";
    s += "                                <div  id=\"start\"  class=\"item\" onclick=\"viewer.goToPage(0); addRemoveClass('class','menu','active'); return false;\">";
    s += "                                    <svg class='svgIcon'><use xlink:href=\"#icBack\"><\/use><\/svg>";
    s += "                                    <span>Go To Start<\/span>";
    s += "                                    <div class=\"tips\">S<\/div>";
    s += "                                <\/div>";
    s += "                            <\/div>";
    /*
    s += "                            <hr>";
    s += "                            <div class=\"groupe\">";
    s += "                                <div class=\"item\" onclick=\"addRemoveClass('class','menu','active');\">";
    s += "                                    <svg><use xlink:href=\"#icHeart\"><\/use><\/svg>";
    s += "                                    <span>About<\/span>";
    s += "                                <\/div>";
    s += "                            <\/div>";
    */
    s += "                <\/div>";
    s += "                <div id=\"btnMenu\" class=\"btnMenu\" onclick=\"addRemoveClass('class', 'menu', 'active')\">";
    s += "                    <svg class='svgIcon'><use xlink:href=\"#icMenu\"><\/use><\/svg>";
    s += "                <\/div>";
    s += "                <div id=\"btnOpenNew\" style='display:none' class=\"btnMenu\" onclick=\"viewer.openNewWindow();return false;\">";
    s += "                    <svg class='svgIcon'><use xlink:href=\"#icResize\"><\/use><\/svg>";
    s += "                <\/div>";
    s += "                <div class=\"navPreviewNext\">";
    s += "                    <div id=\"nav-left-prev\" class=\"btnPreview\" onclick=\"viewer.previous(); return false;\" title=\"Previous screen\">";
    s += "                        <svg class='svgIcon'><use xlink:href=\"#icArrwLeft\"><\/use><\/svg>";
    s += "                    <\/div>";
    s += "                    <div id=\"nav-left-next\" class=\"btnNext\" onclick=\"viewer.next(); return false;\" title=\"Next screen\"><svg class='svgIcon'><use xlink:href=\"#icArrwRight\"><\/use><\/svg><\/div>";
    s += "                <\/div>";
    s += "            <\/div>";
    s += "            <div class=\"navCenter\"><div class=\"pageName title\">Default button<\/div><\/div>";
    s += "            <div class=\"navRight\">";
    s += "            <\/div>";
    s += "        <\/div>";

    s += ' </div>\n';
    s += '</body>\n';
    s += '</html>\n';

    return s;
};

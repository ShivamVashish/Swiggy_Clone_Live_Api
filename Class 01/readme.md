<!-- Header div 1 : Swiggy logo  ka button upr wala -->
tester.js m server side rendering wali file h jo hme fetch api se swigyy.com se copy ki h usme kya hora jo bhi hmara code h wo server ki trah se html form m arra h json format m 

tester.js ek Node.js file hai jo server side pe run hoti hai.(iska data backend api se arra h )
Yani ye browser ke andar nahi chalti, balki server (Node environment) ke andar chalti hai.


Server Side Rendering (SSR) part:
Ab SSR me ye hota hai ki:
Server pe hi data fetch hota hai (browser me nahi).
Server us data ke basis pe HTML generate karta hai.
Fir wo ready-made HTML browser ko bhej deta hai.
Browser ko JavaScript run karne ka wait nahi karna padta — page turant show ho jata hai.


Sytem kse km krta h (first trika)
Hmne ko website dekhi to kya hota h server sbse phle hme use html file lakr de deta h (html) html ke andr css, or javascript file bhi chaiye to uske liye do call phir se chiaye mujhe script file bhi aa gyi mnlo phir isne kha mujhe css file lark bhi do clo ye bhi aa gyi agr tumhare sever m kuch or bhi h fetch ki javascript m kuch fetch operation or h unke liye phir se sever se data mnga jayga ek trah se website asa load hoti h 


Dusra trika(Server Side Rendering)or Next Js yhi krra h 
m jis bhi website ko visit krra hu jse swiggy to jse hi m swiggy ke server pe gya sever kya krta h apne side m hi ye sari rendering process kr leta html,css,javaScript phir in tino ko ek hi file render kr lega jse hi ye puri file tyar ho jaygi ye puri file apko send kr dega to iss process ko hm khete h ki server side m render ho rha h 


React hmara Clinet side rendering krta mtlb to hmara sara code browser m hi run hota h or hme phle html file milegi phir css or phir javascript file milegi or react bhi bhi hmara client side rendering krta h but next js hmara server side rendering krtah 

<!-- Clinet Side Rendering  -->
Jb hm React app pr visit krte browser m to sbse phle hme html file milti h or phir hme css milti h or phir javascript or ye sb hmara broweser m hota h or isko hi hm client side rendering khete h 
<!-- Server Side Rendering -->
Jb hm Kisi bhi website pr to hme html file m hi html,css,javscript ka code ek hi file ke andr hota h or ye sb browser m nhi server m hi hota h or isko hi hm server side rendering khete h Hme ek ready-made HTML file milti h 

Tester.js file ka behaviour hmara Server Side Rendering ke jse hi h 
isme ho kya rha h ye Server(Node.js) me run ho rha h (isse kya hota tumhara code broweser m nhi sever pr execute hota h ) node js hi hmara JSON ko HTML form m convert krke bhej rha h # Swiggy_Clone_Live_Api

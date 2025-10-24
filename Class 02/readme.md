chinese work : https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&resturantId=603438&submitAction=Enter


fetch = https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true


CORS Issue => Swiggy (Application h hmari Display pr open h hmara Browser m open h or asa hi swiggy bhi request marega hmara server ko to swiggy ke server ne browser ko complete krke de dia )

Ab hmne swiggy ka clone create kia h apne local host m or hm request mar rhe h swigggy ke server ko ab swiggy ka server hhmare liye data wo lekr bhi ayega lekin jo hmare clone m jo browser h wo ye dekhega ki dono ka origin alg alg h or jb origin alg alg hota h to wo by default un dono ko full fill nhi hone deta  kyuki wha pe ek header component hota h jo bolta h nhi hm use nhi kr skta h ye allow nhi krne deta 

Origin : Means both are same ek hi domain ke andr store h jb hmne frontend kia hoga to backend bhi uska whi pe hoga 

NOte => Ye jo block kr rha h ye browser kr rha h block 

Solution : Swiggy se data to koi bhi mng skta h ab m kya kru ek third party server ko call kruga or usse boluga ki mujhe swiggy ka ye wala data lakr deta h ye third party server ko data deta h swiggy ka server or ye third party sever modify krega or asa kr dega usko ko hm cors ko imse use kr skte h or phir hme wo data de dega phir wo hamre code ko block nhi krega or ab bich m wo bolega header section ki ye allow h jb wo hamra pass ayega to uske header m cross origin bolega header m ki ye allow h 



Website jo lakr degi hme 
Proxy Server : https://cors-anywhere.herokuapp.com/
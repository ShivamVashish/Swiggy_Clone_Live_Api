<!-- Veg and Non-Veg Food Access ke liye 
iske liye mujhe Three condition likhni hogi

1.Veg and Non-Veg off h (Poore data ko show krana h)
=>First Condition to by default clri h kyuki dono hi trah ka data show hora h hme apne project pr
2.Veg on hota hai,Non-Veg off krna h 
3.Non-Veg agr on hota h to, Veg ko off krdo 
    <=(Ye h Three Condition)=>

Note=> Ab Inko handle krne ke liye ek state variable(Selected) lena hoga jisme ye data show hoga 
Three Condition h ye h 
1.If(Selected === null){
    console.log(Veg & Non-Veg)
}
2.If(Selected === Veg){
    console.log(Veg)
}
3.If(Selected === Non-Veg){
    console.log(Non-Veg)
}


isVeg: present Means its a Veg Food
isVeg: absent Means its not a Veg Food its a Non-Veg Food
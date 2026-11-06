//1、找到按钮
const btn=document.querySelector("#theme-toggl");
//2、给按钮装指令，被点击时，执行大括号里的代码
btn.addEventListener("click",function(){
    //3、查看html上有没有dark类，contains返回True/False
    const isDark=document.documentElement.classList.contains("dark");
    //4、开关：有就去掉dark（变亮），没有就加上dark（变暗）
    if(isDark){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");//记：现在是亮色
    }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");//记：现在是深色
    }
})
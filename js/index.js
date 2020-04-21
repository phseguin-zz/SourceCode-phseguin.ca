document.addEventListener("DOMContentLoaded", function(){
    function makeInput( type, name, placeholder,id, cl, val) {

        let temp = document.createElement("input");
        temp.setAttribute("type", `${type}`);
        temp.setAttribute("name", `${name}`);
        temp.setAttribute("id", `${id}`);
        temp.setAttribute("placeholder",`${placeholder}`);
        temp.setAttribute("class", `${cl}`);
        temp.setAttribute("value", `${val}`)
        if (type === "range")
        {
            temp.setAttribute("Min", 0);
            temp.setAttribute("Max", 10);
        }
        return temp;
    }function makeDiv(id,cl) {
        let temp = document.createElement("div");
        temp.setAttribute("class", `${cl}`);
        temp.setAttribute("id", `${id}`);
        return temp;
    }function makeP(id,cl,content){
        let temp = document.createElement("p");
        temp.setAttribute("id", `${id}`);
        temp.setAttribute("class", `${cl}`);
        temp.textContent = content;
        return temp;
    }function makeH2(id,cl,content){
        let temp = document.createElement("h2");
        temp.setAttribute("id",`${id}`);
        temp.textContent = content;
        temp.setAttribute("class", `${cl}`);
        return temp;
    }function makeLabel(id,cl,content, aFor){
        let temp = document.createElement("label");
        temp.setAttribute("id", `${id}`);
        temp.setAttribute("class", `${cl}`);
        temp.setAttribute("for", `${aFor}`);
        temp.textContent = content;
        return temp;
    }function makeButton(id,cl,content,ty){
        let temp = document.createElement("button");
        temp.setAttribute("id", `${id}`);
        temp.setAttribute("class", `${cl}`);
        temp.setAttribute("type",`${ty}`)
        temp.textContent = content;
        return temp;
    }function makeMovieImg(sr,sz,al){
        let temp = document.createElement("img");
        temp.setAttribute("src", `${imgUrl}${sz}${sr}`);
        temp.setAttribute("alt",al);
        return temp;
    }function makeImg(sr,al){
        let temp = document.createElement("img");
        temp.setAttribute("src", `${sr}`);
        temp.setAttribute("alt",al);
        return temp;}
    function makeList(id,cl){
        let temp = document.createElement("ul")
        temp.setAttribute("id",id);
        temp.setAttribute("class",cl);
        return temp;
        }
    function makeLink(id,cl,urPt1,urPt2,content){
        let temp = document.createElement("a");
        temp.setAttribute("id",id);
        temp.setAttribute("class",cl);
        temp.setAttribute("href",urPt1 + urPt2);
        temp.innerText = content;
        return temp;
    }
    function br() { return document.createElement("br")}
    const navigate = document.querySelector(".Nav");
    const home = document.getElementById("homepage");

    navigate.addEventListener("click", (e) => {
        if (e.toElement.innerText === "Home"){
            let imDiv = makeDiv("imageDiv","gridDiv");
            let im = makeImg('images/pseguin.jpeg','Pascal Hamish Seguin');
            let imLab = makeLabel("imgCaption","text","Pascal Hamish Seguin Circa 2016","");
            let abDiv = makeDiv("aboutDiv","gridDiv");
            let abHd = makeH2("aboutHeader","text","Hello World!");
            let abTxt = makeP("aboutText","text","Welcome to my dynamic resume. I created this site to display some of my work and skills that I have developed. I have spent signifigant time through education and work experince to build a IT skill set to solve modern day problems. Through my volunteer efforts I have developed skills in people and resource managment. I hope you find this site helpful in learning about me and my work.");
            home.appendChild(imDiv);
            imDiv.appendChild(im);
            im.appendChild(imLab);
            home.appendChild(abDiv);
            abDiv.appendChild(abHd);
            abHd.appendChild(abTxt);
        }
    });
});
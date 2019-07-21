//מוראד נסראלדין 205718182
const mySelf = {name:"murad",
                age:24, 
                address:{
                    city:"daliat el carmel", 
                    country:"israel"
                },
                family:[
                    {name:"dad",age:53},
                    {name:"mom",age:49}
                ],

                getAddress(){
                    return this.address;
                },

                howManyRelatives(){
                    return this.family.length;
                },

                printMyName(){
                    console.log(this.name);
                },

                addFamilyRelative(obj){
                    this.family.push(obj);
                },

                setName(name){
                    this.name = name;
                }
            };


            function printObject(obj)
            { 
                for (let n in obj)
              {
                if(Array.isArray(obj[n])){
                    console.log(n + ":[");
                    obj[n].forEach(element => {
                        console.log("{");
                        printObject(element);
                        console.log("},");
                    });
                    console.log("]");
                }
                else if(typeof(obj[n])=="object"){
                    console.log(n+": {");
                    printObject(obj[n]);
                    console.log("}");
                }else{
                    console.log(`${n} : ${obj[n]}`)
                }
              }
            }

            printObject(mySelf);

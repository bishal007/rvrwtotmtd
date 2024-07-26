let str = "Hello, World";

const reversed = (str) =>{
		let result = "";
		for(let c of str){
    	result = c + result
    }
}

reversed(str);
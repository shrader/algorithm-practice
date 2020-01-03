function rot13(str) { // LBH QVQ VG!
    let alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let bet = alpha.slice(13);
    let y = (alpha.slice(0,13));
    bet = bet.concat(y);
    let alphabet = [];
    alphabet.length = 13;
    alphabet = alphabet.concat(bet);
    let regex = /[A-Z]/i;
    let translated = [];
    str = str.split("");
  
    //check each char to see if its a letter w/regex
    for (let i = 0; i < str.length; i++) {
        if (regex.test(str[i]) === true) {
            //if it is a letter get its "alpha" index
          let place = alpha.indexOf(str[i]);
            //use the number to get the translated char from              alphabet then push it to the return string
        translated.push(alphabet[place + 13]);
      } else {
        //if its not a letter push it to the return string
        translated.push(str[i]);
      }
    }
    //after all chars have been translated and or pushed return the return string
      console.log(translated.join(""));
      return translated.join("");
  }
  
  
  rot13("SERR PBQR PNZC");
  rot13("SERR YBIR?")
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
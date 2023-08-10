const shorten = (title) =>{
    const splitedTitle = title.split(" ");
    const newtitle = `${splitedTitle[0]} ${splitedTitle[1]}`
    return newtitle ;
}

export {shorten};

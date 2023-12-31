window.onload = function () {
  // const pasteButton = document.querySelector("#paste-button");
  const copyButton = document.querySelector("#copy-button");

  const convert = document.querySelector("#convert-button");
  const short = document.querySelector("#short");
  const long = document.querySelector("#long");
  const iframe = document.querySelector(".embedcontainer");
  let linkRef = "https://youtube.com/shorts/kUgRI9MQ7-I";
  let validation = false;

  // pasteButton.onclick = function onPast() {
  //   navigator.clipboard.readText().then(
  //     (cliptext) =>
  //       (short.value = cliptext),
  //     (err) => console.log(err)
  //   );
  // };
  
  copyButton.onclick = function onCopy() {
    navigator.clipboard.writeText(long.value);
    console.log("copy")
  };
  short.value = linkRef ;
  embeding();
  onSubmit();
  
  short.onblur = () =>{embeding();}

  function embeding() {
    linkRef = short.value;
    if (
      linkRef.match("youtube.com") == "youtube.com" &&
      linkRef.match("shorts/") == "shorts/"
    ) {
      linkRef =
        '<iframe width="560" height="315" src="' +
        linkRef.replace("shorts", "embed") +
        '" title="YouTube video player" frameborder="2" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

      iframe.innerHTML = linkRef;
    }
  }
  
  convert.onclick = () =>{onSubmit();}
  short.onkeydown = function(event){
   if (event.key === "Enter"){onSubmit()}
  }; 
  
    function onSubmit() {
    embeding();
    linkRef = short.value;
    if (
      linkRef.match("youtube.com") == "youtube.com" &&
      linkRef.match("shorts/") == "shorts/"
    ) {
      linkRef.replace("shorts/", "watch?v=");
      long.value = linkRef.replace("shorts/", "watch?v=");
      validation = true;
    } else {
      long.value = "INVALID LINK";
      validation = false;
    }

    if (validation) {
      long.className = long.className.replace(" invalid", " valid");
      copyButton.disabled = false;
    } else {
      long.className = long.className.replace(" valid", " invalid");
      copyButton.disabled = true;
 
    }
    console.log(validation);

    console.log(copyButton);
  }
  
}


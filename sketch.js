<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <meta charset="utf-8" />
  </head>
  <body>
    <main></main>
    <script src="sketch.js"></script>
    <h1 style="padding: 15px; margin:auto; text-align:center;color:pink">Youtube Shorts Link Converter</h1>
    <div class="inputcontainer">
      <div class="input">
        <form>
          <label for="short">Shorts Link:</label>
          <input
            class="inputfield"
            type="text"
            id="short"
            name="short"
            size="50"
          />
          <!--           <button id="paste-button" type="button" size="10">📋</button>  -->
          <br /><br />
          <label for="long">Normal Link:</label>
          <input
            class="inputfield invalid"
            type="text"
            id="long"
            name="long"
            size="50"
            readonly
          />
          <button id="copy-button" type="button" size="10" disabled>📋</button>
          <br /><br />
          <input type="button" id="convert-button" value="Convert" />
        </form>
      </div>
    </div>
    <div class="embedcontainer"></div>
  </body>
</html>

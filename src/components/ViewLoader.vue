<template>
  <div id="loading-spinner">
    <div class="spin-icon"></div>
  </div>
</template>
<style lang="scss" scoped>

body {
  background-color: #000;
}

#loading-spinner {
  position: absolute;
  top: 40%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

#loading-spinner .spin-icon {
  margin: auto;
  width: 80px;
  height: 80px;

  border: solid 3px transparent;
  border-top-color:  var(--text);
  border-left-color: var(--text);
  border-radius: 80px;

  -webkit-animation: loading-spinner 500ms linear infinite;
  -moz-animation:    loading-spinner 500ms linear infinite;
  -ms-animation:     loading-spinner 500ms linear infinite;
  -o-animation:      loading-spinner 500ms linear infinite;
  animation:         loading-spinner 500ms linear infinite;
}

@-webkit-keyframes loading-spinner {
  0%   { -webkit-transform: rotate(0deg);   transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}

@-moz-keyframes loading-spinner {
  0%   { -moz-transform: rotate(0deg);   transform: rotate(0deg); }
  100% { -moz-transform: rotate(360deg); transform: rotate(360deg); }
}

@-o-keyframes loading-spinner {
  0%   { -o-transform: rotate(0deg);   transform: rotate(0deg); }
  100% { -o-transform: rotate(360deg); transform: rotate(360deg); }
}

@-ms-keyframes loading-spinner {
  0%   { -ms-transform: rotate(0deg);   transform: rotate(0deg); }
  100% { -ms-transform: rotate(360deg); transform: rotate(360deg); }
}

@keyframes loading-spinner {
  0%   { transform: rotate(0deg);   transform: rotate(0deg); }
  100% { transform: rotate(360deg); transform: rotate(360deg); }
}

</style>
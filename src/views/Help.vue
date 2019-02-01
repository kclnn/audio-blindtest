<template>
  <div class="container">    
    <div class="notification has-background-dark">
      <p><strong class="has-text-highlighted">What is this?</strong></p>
      <p>This tool allows you to blindly listen to the differences in two or more audio files. &ldquo;Blindly&rdquo; meaning that the audio files are presented in a random order and their file names are hidden until you choose to show them.</p>
    </div>
    <div class="notification has-background-dark">
      <p><strong class="has-text-success">What audio files can I use?</strong></p>
      <p>You can use audio files that are stored on your device in any common format that can be played back by your browser (wav, mp3, ogg, &hellip;).</p>
      <p>For comparing of different compression methods, a large number of audio files is available at <a href="http://nigelcoldwell.co.uk/audio/" target="_blank">http://nigelcoldwell.co.uk/audio/</a>. Alternatively, <a href="https://nyxl.de/files/TheShaping_qualities.zip">this zip-file (11MB)</a> contains 11 compression levels of a 30-second track,  <a href="https://nyxl.de/files/Untitled_qualities.zip">this zip-file (55MB)</a> contains 11 compression levels of a two-and-a-half-minute track.</p>
    </div>
    <div class="notification has-background-dark">
      <p><strong class="has-text-warning">What is &ldquo;Binomial Test&rdquo;?</strong></p>
      <p>
        The <router-link :to="{'name': 'binomial'}">Binomial Test</router-link> can help you determine if you are able to hear a difference between two audio files. 
        It asks you to select two audio files and the number of repetitions. The two audio files are then presented to you in a random order and you have to choose 
        which of them is the first audio file. In order to get a meaningful result, you have to do at least 10 repetitions.
        In the end, you will see the probability that a random guesser would guess correctly at least as often as you did. 
        If this probability is very small, it is likely that you are able to actually hear a difference in the two audio files.
      </p>
      <p>
        You will not be able to see any results before completing all repetitions (you can decide how many repetitions you want to do, but it has to be at least 10).
        This is to prevent you from being distracted or influenced by your results before you have completed the test.
        If you don't want to identify the audio files so many times, use the <router-link :to="{'name': 'home'}">simple blindtest</router-link> instead.
      </p>
    </div>
  </div>
</template>

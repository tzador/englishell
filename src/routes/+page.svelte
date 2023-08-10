<article class="paper margin md-8 sm-12">
  <h1>englishell</h1>
  <p>
    Execute shell commands by providing human readable (free text) instructions, in plain english.
  </p>
  <p><b>Powered by ChatGPT.</b></p>
  <p>
    <a href="https://github.com/tzador/englishell">
      Go to GitHub for instructions on how to install and use it in your terminal now.
    </a>
  </p>
  <div><b>Example:</b></div>
  <pre><code>
$ <b>englishell</b> kill the process that listens to port 8080
# Suggests:
lsof -i :8080 | awk '{"{"}print {"$"}2{"}"}' | tail -n 1 | xargs kill -9
  </code></pre>
</article>

<style>
  article {
    margin: 1rem auto;
  }
</style>

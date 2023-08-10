<script lang="ts">
  import "papercss/dist/paper.min.css";
  import "../app.css";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<slot />

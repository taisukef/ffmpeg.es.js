# ffmpeg.es.js
 
ffmpeg.js ES module version

## usage

```
import { FFmpeg } from "https://taisukef.github.io/ffmpeg.es.js/ffmpeg.es.js";

const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({
  log: true,
});
await ffmpeg.load();
await ffmpeg.run("-i", "input.webm", "output.mp4");
```

## how to build

```
deno run -A make.js
```
fetch "https://unpkg.com/@ffmpeg/ffmpeg@${version}/dist/ffmpeg.min.js"
add export code

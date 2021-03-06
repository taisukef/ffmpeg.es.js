# ffmpeg.es.js
 
- ffmpeg JavaScript ES module version
- [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)

## usage

```js
import { FFmpeg } from "https://taisukef.github.io/ffmpeg.es.js/ffmpeg.es.js";

const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({
  log: true,
});
await ffmpeg.load();
await ffmpeg.run("-i", "input.webm", "output.mp4");
```

## how to build

```bash
deno run -A make.js
```

1. fetch "https://unpkg.com/@ffmpeg/ffmpeg@${version}/dist/ffmpeg.min.js"
2. add export code
3. write "ffmpeg.es.js"

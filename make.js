const version = "0.10.1";
const url = `https://unpkg.com/@ffmpeg/ffmpeg@${version}/dist/ffmpeg.min.js`;
console.log(url);
const text = await (await fetch(url)).text();
const es = text + "\nconst FFmpeg = globalThis.FFmpeg;\nexport { FFmpeg };\n";
Deno.writeTextFile("ffmpeg.es.js", es);

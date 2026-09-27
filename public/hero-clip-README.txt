HeroVideoBg setup — 1 step left
================================

Code is wired up (src/components/HeroVideoBg.jsx, src/pages/Home.jsx,
src/pages/Home.css) and expects a file at:

    public/hero-clip.mp4

I couldn't include that file in this zip — I don't have internet/network
access in this environment, so I can't download or trim the YouTube video
myself.

To finish, run this on your own machine (needs yt-dlp + ffmpeg):

    yt-dlp -f mp4 "https://youtu.be/O67m2k70JLA" -o video.mp4
    ffmpeg -i video.mp4 -ss 00:01:48 -to 00:01:58 -an -vf "scale=1280:-2" ^
      -c:v libx264 -crf 23 -movflags +faststart hero-clip.mp4

Then drop the resulting hero-clip.mp4 into this public/ folder (replacing
this note, or alongside it — the filename just needs to match what
HeroVideoBg is given in Home.jsx: src="/hero-clip.mp4").

No ffmpeg/yt-dlp? Any online video trimmer (e.g. ezgif.com/video-cutter)
works too — just make sure the export is muted/has no audio track and is
named hero-clip.mp4.

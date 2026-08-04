# Copies photos from "Gallery Page" into wife-art-site/public/artworks,
# renaming each to the filename the site expects.

$sourceDir = "C:\Users\rjmor\OneDrive\Documents\Zimoreira.com\Gallery Page"
$destDir   = "C:\Users\rjmor\OneDrive\Documents\Zimoreira.com\wife-art-site\public\artworks"

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$map = [ordered]@{
    "Bare Layers 36x36"                     = "bare-layers"
    "Blue Fog 12x12"                        = "blue-fog"
    "Bubble of Light 30x30"                 = "bubble-of-light"
    "Bue Fog 2 12x12"                       = "blue-fog-2"
    "Chicago 24x30"                         = "chicago"
    "Defining Lines 24x30"                  = "defining-lines"
    "Entrance Door 24x36"                   = "entrance-door"
    "Fewest Words 24x24"                    = "fewest-words"
    "Fondest Memories 24x24"                = "fondest-memories"
    "Foreword 24x30"                        = "foreword"
    "Inlet Blue 24x36"                      = "inlet-blue"
    "Irreplaceable 36x36"                   = "irreplaceable"
    "Layers of Ash 30x30"                   = "layers-of-ash"
    "Layers of Silence 24x24"               = "layers-of-silence"
    "Lost My Head 24x24"                    = "lost-my-head"
    "Old Soul 24x30"                        = "old-soul"
    "Out of Place 36x36"                    = "out-of-place"
    "Overrated Anyway 24x24"                = "overrated-anyway"
    "Sand Storm 24x36"                      = "sand-storm"
    "Shades of Blue 2 24x24"                = "shades-of-blue-2"
    "Shades of Blue 3 24x30"                = "shades-of-blue-3"
    "Shades of Blue 4 24x24"                = "shades-of-blue-4"
    "Shapes and Colors 24x36"               = "shapes-and-colors"
    "Silent Mind 24x24"                     = "silent-mind"
    "Sliver of a Moment 24x24"              = "sliver-of-a-moment"
    "So Far, so Peaceful 24x24"             = "so-far-so-peaceful"
    "Somewhere 24x36"                       = "somewhere"
    "Source of Healing 24x30"               = "source-of-healing"
    "Take a Moment of Breath 24x36"         = "take-a-moment-of-breath"
    "The Sun 36x36"                         = "the-sun"
    "The Tower 24x36"                       = "the-tower"
    "The World Outside my Window 24x24"     = "the-world-outside-my-window"
    "To Deep to Turn Back 24x30"            = "too-deep-to-turn-back"
    "Under a Strong Storm 30x30"            = "under-a-strong-storm"
    "Underrated Anyway 24x24"               = "underrated-anyway"
    "Unexpected 24x24"                      = "unexpected"
    "You're just on time 24x30"             = "youre-just-on-time"
}

$ok = 0
$missing = @()

foreach ($originalName in $map.Keys) {
    $newSlug = $map[$originalName]
    $matches = Get-ChildItem -Path $sourceDir -File -Filter "$originalName.*" -ErrorAction SilentlyContinue

    if ($matches -and $matches.Count -gt 0) {
        $file = $matches[0]
        $newFileName = "$newSlug$($file.Extension.ToLower())"
        Copy-Item -Path $file.FullName -Destination (Join-Path $destDir $newFileName) -Force
        Write-Host "OK:      '$originalName' -> $newFileName"
        $ok++
    } else {
        Write-Host "MISSING: '$originalName' (no file found matching this name in Gallery Page)"
        $missing += $originalName
    }
}

Write-Host ""
Write-Host "Done. Copied $ok of $($map.Count) files."
if ($missing.Count -gt 0) {
    Write-Host ""
    Write-Host "These need to be copied manually (name in 'Gallery Page' didn't match exactly):"
    $missing | ForEach-Object { Write-Host " - $_" }
}
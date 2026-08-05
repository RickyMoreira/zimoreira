# Copies photos/videos from the "Homepage" folder into
# wife-art-site/public/showroom, renaming each to the filename the site expects.
#
# HOW TO RUN:
# 1. Save this file as copy-showroom.ps1 inside
#    C:\Users\rjmor\OneDrive\Documents\Zimoreira.com
# 2. Open PowerShell in that folder (Shift + right-click -> "Open PowerShell window here")
# 3. Run:  powershell -ExecutionPolicy Bypass -File .\copy-showroom.ps1
# 4. Read the OK / MISSING lines it prints.
#
# IMPORTANT: edit $sourceDir below if these files are NOT in a folder
# called "Homepage" next to "Gallery Page" and "wife-art-site".

$sourceDir = "C:\Users\rjmor\OneDrive\Documents\Zimoreira.com\Homepage"
$destDir   = "C:\Users\rjmor\OneDrive\Documents\Zimoreira.com\wife-art-site\public\showroom"

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

# original name (as shown in Explorer, without extension) -> new slug
$map = [ordered]@{
    "Badroom"                = "badroom"
    "bare layers"            = "bare-layers-room"
    "Blue"                   = "blue"
    "Claro"                  = "claro"
    "Gallery"                = "gallery-room"
    "Gray"                   = "gray"
    "Gray2"                  = "gray-2"
    "Gray3"                  = "gray-3"
    "Gray4"                  = "gray-4"
    "Green"                  = "green"
    "Nice"                   = "nice"
    "Sala"                   = "sala"
    "Sala2"                  = "sala-2"
    "sand storm (1)"         = "sand-storm-2"
    "sand storm"             = "sand-storm-room"
    "shapes and colors"      = "shapes-and-colors-room"
    "somewhere"              = "somewhere-room"
    "source of healing"      = "source-of-healing-room"
    "Source"                 = "source"
    "the sun (1)"            = "the-sun-2"
    "the sun"                = "the-sun-room"
    "the tower"              = "the-tower-room"
    "White"                  = "white"
}

# These two had truncated names in the folder view, so we match with a
# wildcard on the visible part instead of an exact name.
$wildcardMap = [ordered]@{
    "Fire in the firepla*"   = "fire-in-the-fireplace"
    "the world outsid*"      = "the-world-outside-room"
    "Woman walking*"         = "woman-walking"
}

$ok = 0
$missing = @()

foreach ($originalName in $map.Keys) {
    $newSlug = $map[$originalName]
    $found = Get-ChildItem -Path $sourceDir -File -Filter "$originalName.*" -ErrorAction SilentlyContinue

    if ($found -and $found.Count -gt 0) {
        $file = $found[0]
        $newFileName = "$newSlug$($file.Extension.ToLower())"
        Copy-Item -Path $file.FullName -Destination (Join-Path $destDir $newFileName) -Force
        Write-Host "OK:      '$originalName' -> $newFileName"
        $ok++
    } else {
        Write-Host "MISSING: '$originalName' (no file found matching this name)"
        $missing += $originalName
    }
}

foreach ($pattern in $wildcardMap.Keys) {
    $newSlug = $wildcardMap[$pattern]
    $found = Get-ChildItem -Path $sourceDir -File -Filter "$pattern" -ErrorAction SilentlyContinue

    if ($found -and $found.Count -gt 0) {
        $file = $found[0]
        $newFileName = "$newSlug$($file.Extension.ToLower())"
        Copy-Item -Path $file.FullName -Destination (Join-Path $destDir $newFileName) -Force
        Write-Host "OK:      '$pattern' -> $newFileName"
        $ok++
    } else {
        Write-Host "MISSING: '$pattern' (no file found matching this pattern)"
        $missing += $pattern
    }
}

$total = $map.Count + $wildcardMap.Count
Write-Host ""
Write-Host "Done. Copied $ok of $total files."
if ($missing.Count -gt 0) {
    Write-Host ""
    Write-Host "These need to be copied manually:"
    $missing | ForEach-Object { Write-Host " - $_" }
}
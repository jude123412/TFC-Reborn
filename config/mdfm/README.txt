MDFM (Mod Downloader From Modrinth)
This mods.json file is an auto-generated TEMPLATE.
As long as the player has this sample template (or the file
doesn't exist), NO warning screen will be shown on game launch.

To prepare your modpack:
1. Edit mods.json and replace the examples with the real mods.
   - name: the name shown to the player.
   - url: the mod's Modrinth download link. This can be a normal
     Modrinth version page link (e.g. modrinth.com/mod/x/version/y),
     which is automatically resolved to the real CDN download link
     via Modrinth's public API, or an already-direct link hosted on
     cdn.modrinth.com. For security reasons, ONLY modrinth.com and
     cdn.modrinth.com links are accepted - any other URL is refused.
   - fileName: the file name it will be saved as in the mods/ folder.
   - sha1 / sha512 (optional): expected hash of the downloaded file.
     If provided, the download is rejected unless it matches exactly.
2. Distribute the pack with this edited mods.json already included.
3. On every launch, the mod checks whether those files already exist
   in mods/. If any are missing, the warning screen is shown and the
   game cannot proceed until they are downloaded.
4. Once all files exist in mods/, the screen will not appear again.

<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.2" name="Factory console" tilewidth="64" tileheight="64" tilecount="8" columns="4" objectalignment="bottom">
 <tileoffset x="0" y="32"/>
 <image source="Factory console.png" width="256" height="128"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="3" x="0" y="48">
    <polygon points="0,0 32,-16 64,0 32,16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="1">
  <objectgroup draworder="index" id="2">
   <object id="1" x="32" y="64">
    <polygon points="0,0 -32,-16 0,-32 32,-16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="2">
  <objectgroup draworder="index" id="2">
   <object id="1" x="32" y="64">
    <polygon points="0,0 -32,-16 0,-32 32,-16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="4">
  <objectgroup draworder="index" id="2">
   <object id="1" x="32" y="64">
    <polygon points="0,0 32,-16 0,-32 -32,-16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="5">
  <objectgroup draworder="index" id="2">
   <object id="1" x="32" y="64">
    <polygon points="0,0 32,-16 0,-32 -32,-16"/>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="6" duration="400"/>
   <frame tileid="7" duration="400"/>
   <frame tileid="6" duration="400"/>
   <frame tileid="5" duration="400"/>
  </animation>
 </tile>
</tileset>

<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.2" name="Cyberworld new oneways" tilewidth="64" tileheight="64" tilecount="8" columns="4" objectalignment="bottom">
 <tileoffset x="0" y="16"/>
 <image source="Cyberworld new oneways.png" width="256" height="128"/>
 <tile id="0" type="Conveyor">
  <properties>
   <property name="Direction" value="Up Left"/>
   <property name="Sound Effect" value="/server/assets/dir_tile.ogg"/>
   <property name="Speed" value="6"/>
  </properties>
  <animation>
   <frame tileid="0" duration="200"/>
   <frame tileid="2" duration="200"/>
  </animation>
 </tile>
 <tile id="1" type="Conveyor">
  <properties>
   <property name="Direction" value="Down Right"/>
   <property name="Sound Effect" value="/server/assets/dir_tile.ogg"/>
   <property name="Speed" value="6"/>
  </properties>
  <animation>
   <frame tileid="1" duration="200"/>
   <frame tileid="3" duration="200"/>
  </animation>
 </tile>
 <tile id="4" type="Conveyor">
  <properties>
   <property name="Direction" value="Up Left"/>
   <property name="Sound Effect" value="/server/assets/dir_tile.ogg"/>
   <property name="Speed" value="6"/>
  </properties>
  <animation>
   <frame tileid="4" duration="200"/>
   <frame tileid="6" duration="200"/>
  </animation>
 </tile>
 <tile id="5" type="Conveyor">
  <properties>
   <property name="Direction" value="Down Right"/>
   <property name="Sound Effect" value="/server/assets/dir_tile.ogg"/>
   <property name="Speed" value="6"/>
  </properties>
  <animation>
   <frame tileid="5" duration="200"/>
   <frame tileid="7" duration="200"/>
  </animation>
 </tile>
</tileset>

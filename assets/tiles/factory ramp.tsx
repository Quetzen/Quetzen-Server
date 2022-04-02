<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.2" name="factory ramp" tilewidth="64" tileheight="80" tilecount="20" columns="3" objectalignment="bottom">
 <tileoffset x="0" y="32"/>
 <grid orientation="orthogonal" width="64" height="64"/>
 <image source="factory ramp.png" width="192" height="240"/>
 <tile id="0" type="Stairs">
  <properties>
   <property name="Direction" value="Up Left"/>
  </properties>
  <animation>
   <frame tileid="0" duration="400"/>
   <frame tileid="3" duration="400"/>
   <frame tileid="6" duration="400"/>
   <frame tileid="3" duration="400"/>
  </animation>
 </tile>
 <tile id="1" type="Stairs">
  <properties>
   <property name="Direction" value="Up Left"/>
  </properties>
  <animation>
   <frame tileid="1" duration="400"/>
   <frame tileid="4" duration="400"/>
   <frame tileid="7" duration="400"/>
   <frame tileid="4" duration="400"/>
  </animation>
 </tile>
 <tile id="2" type="Stairs">
  <properties>
   <property name="Direction" value="Up Left"/>
  </properties>
  <animation>
   <frame tileid="2" duration="400"/>
   <frame tileid="5" duration="400"/>
   <frame tileid="8" duration="400"/>
   <frame tileid="5" duration="400"/>
  </animation>
 </tile>
</tileset>

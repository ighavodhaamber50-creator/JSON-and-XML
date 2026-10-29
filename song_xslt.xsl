<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Music Library</title>
      </head>
      <body>

        <h1>Music Library</h1>

        <xsl:for-each select="music_library/album">

          <h2><xsl:value-of select="title"/> — <xsl:value-of select="artist"/></h2>
          <p>Genre: <xsl:value-of select="@genre"/></p>
          <p>Year: <xsl:value-of select="@year"/></p>
          <p>Label: <xsl:value-of select="label"/></p>

          <h3>Musicians</h3>
          <table border="1" cellpadding="8" cellspacing="0">
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
            <xsl:for-each select="musicians/musician">
              <tr>
                <td><xsl:value-of select="."/></td>
                <td><xsl:value-of select="@role"/></td>
              </tr>
            </xsl:for-each>
          </table>

          <h3>Songs</h3>
          <table border="1" cellpadding="8" cellspacing="0">
            <tr>
              <th>Track</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Featuring</th>
            </tr>
            <xsl:for-each select="songs/song">
              <tr>
                <td><xsl:value-of select="@track"/></td>
                <td><xsl:value-of select="title"/></td>
                <td><xsl:value-of select="@duration"/></td>
                <td><xsl:value-of select="featuring"/></td>
              </tr>
            </xsl:for-each>
          </table>

          <hr/>

        </xsl:for-each>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
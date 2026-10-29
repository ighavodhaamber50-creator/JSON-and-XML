<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Movie Ratings</title>
      </head>
      <body>

        <h1>Movie Rating Site</h1>

        <table  border="1" cellpadding="8" cellspacing="0">
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Rating (out of 5)</th>
          </tr>

<xsl:for-each select="movies/movie">

</xsl:for-each>
          <xsl:for-each select="movies/movie">
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td><xsl:value-of select="director"/></td>
              <td><xsl:value-of select="rating"/></td>
            </tr>
          </xsl:for-each>

        </table>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
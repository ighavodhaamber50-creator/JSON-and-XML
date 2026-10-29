<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>Movie Reviews</title>
      </head>
      <body>

        <h1>Movie Reviews</h1>

        <table border="1" cellpadding="8" cellspacing="0">
          <tr>
            <th>Author</th>
            <th>Movie</th>
            <th>Comment</th>
            <th>Rating (out of 5)</th>
          </tr>
          <xsl:for-each select="reviews/review">
            <xsl:if test="rating &lt; 4.0">
              <tr>
                <td><xsl:value-of select="author"/></td>
                <td><xsl:value-of select="movie"/></td>
                <td><xsl:value-of select="comment"/></td>
                <td><xsl:value-of select="rating"/></td>
              </tr>
            </xsl:if>
          </xsl:for-each>
        </table>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
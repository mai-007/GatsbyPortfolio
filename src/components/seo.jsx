import React from 'react'

const Seo = () =>{
  return(
    <>
      <html lang="ja"/>
      <meta name="robots" content="noindex"/>
      <meta name="googlebot" content="noindex" />
      <meta name="googlebot-news" content="nosnippet" />
      <script type="application/javascript">
{`
  {
    (function(d){
      var config = {
        kitId: '${process.env.TYPEKIT_ID}',
        scriptTimeout: 3000,
        async: true
      },
      h
    })
  }
`}
      </script>
      <title>m.k_portfolio</title>
    </>
  )
}

export default Seo

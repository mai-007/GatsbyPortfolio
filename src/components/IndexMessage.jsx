import React from 'react'
//import Section from './Section'
import { Box, Heading, Text, Flex} from '@chakra-ui/react'


const IndexMessage = () => {
  return(
    <div>
      <Flex>
        <Heading as="h2">
          世の中をもっと<br />便利にしたい。
        </Heading>
        <Box>
          <Text>見た目の美しさだけではなくアクセシビリティ・使いやすさ・分かりやすさに配慮したデザインを。</Text>
          <Text>一般的なBem/FLOCSSを活用した拡張性のあるコーディング、Wordpressカスタマイズは勿論、Reactでのセキュリティリスク・速度を改善させるサーバーサイドレンダリング・静的生成も。</Text>
          <Text>ディレクション・デザイン・フロントエンド・開発環境の構築まで「世の中をもっと便利にしたい」という目的の為、日々学んだことを公開しています。</Text>
        </Box>
      </Flex>
    </div>
  )
}

export default IndexMessage

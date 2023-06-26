const Parser = require('rss-parser');
const parser = new Parser();

const feedUrl = 'https://feeds.folha.uol.com.br/mercado/rss091.xml';
const NewsRepository = require('./repositories/newsRepository');

(async () => {
  try {
    const feed = await parser.parseURL(feedUrl);
  
    console.log('Título:', feed.title);
    console.log('Descrição:', feed.description);
    console.log('Link:', feed.link);
  
    console.log('-----');
    console.log('Itens do feed:');
    feed.items.forEach(item => {
      console.log('Título:', item.title);
      console.log('Descrição:', item.description);
      console.log('Link:', item.link);
      console.log('Data de publicação:', item.pubDate);
      console.log('-----');

      let news = {
        title: item.title,
        descricao: item.description,
        link: item.link.replace('https://redir.folha.com.br/redir/online/mercado/rss091/*',''),
        data: item.pubDate
      }

      NewsRepository.create(news)
        .then((data) => {
            console.log(data)
        }).catch(err => console.log(err))
    });
  } catch (error) {
    console.error('Erro ao ler o feed RSS:', error);
  }
})();
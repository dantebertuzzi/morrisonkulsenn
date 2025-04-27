// entries.js
const entries = [
    {
        id: 'teorema1',
        title: 'Teorema de Bayes',
        universe: 'Probabilidade',
        theorem: "$$P(A|B)= \\frac{P(B|A) \\cdot P(A)}{P(B)}$$",
        description: 'A probabilidade de um evento A dado que o evento B ocorreu é calculada a partir da probabilidade de B dado A, a probabilidade de A e a probabilidade de B.',
        email: '$$P(A)=\\frac{n(A)}{n(\\Omega)}$$',
    },
    {
        id: 'teorema2',
        title: 'Lei da Probabilidade Total',
        universe: 'Probabilidade',
        theorem: "$$P(A)= \\sum_{i} P(A|B_i) \\cdot P(B_i)$$",
        description: 'A probabilidade de um evento A é a soma das probabilidades condicionais de A dado cada evento B_i, ponderadas pela probabilidade de cada B_i.',
        email: '$$P(A|B)=\\frac{P(A \\cap B)}{P(B)}$$',
    },
    {
        id: 'teorema3',
        title: 'Teorema Central do Limite',
        universe: 'Estatística',
        theorem: "Se \\(X_1, X_2, ..., X_n\\) são i.i.d. com média \\(\\mu\\) e variância \\(\\sigma^2\\), então, à medida que \\(n\\) se aproxima do infinito, a distribuição da média amostral se aproxima de uma distribuição normal.",
        description: 'O Teorema Central do Limite afirma que a distribuição da média amostral se aproximará de uma distribuição normal à medida que o tamanho da amostra se torna grande, independentemente da distribuição original da população.',
        email: '$$\\bar{X}=\\frac{1}{n}\\sum_{i=1}^n X_i$$',
    },
    {
        id: 'teorema4',
        title: 'Lei dos Grandes Números',
        universe: 'Estatística',
        theorem: "À medida que \\(n\\) se aproxima do infinito, a média amostral \\(\\bar{X}\\) convergirá para o valor esperado \\(\\mu\\) da variável aleatória.",
        description: 'A Lei dos Grandes Números afirma que, à medida que o número de ensaios ou observações aumenta, a média amostral convergirá para o valor esperado da variável aleatória.',
        email: '$$E[X]=\\mu$$',
    },
    {
        id: 'teorema5',
        title: 'Desigualdade de Chebyshev',
        universe: 'Probabilidade',
        theorem: "$$P(|X - \\mu| \\geq k \\sigma) \\leq \\frac{1}{k^2}$$",
        description: 'A Desigualdade de Chebyshev fornece um limite sobre a probabilidade de uma variável aleatória desviar de sua média por mais de um certo número de desvios padrão.',
        email: '$$P(|X-\\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$',
    },
    {
        id: 'teorema6',
        title: 'Distribuição de Bernoulli',
        universe: 'Probabilidade',
        theorem: "$$P(X = 1) = p, \\quad P(X = 0) = 1 - p$$",
        description: 'A distribuição de Bernoulli representa uma variável aleatória que possui exatamente dois resultados possíveis: 1 (sucesso) com probabilidade p e 0 (fracasso) com probabilidade 1 - p.',
        email: '$$E(X) = p, \\quad Var(X) = p(1 - p)$$',
    },
    {
        id: 'teorema7',
        title: 'Distribuição Binomial',
        universe: 'Probabilidade',
        theorem: "$$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$$",
        description: 'A distribuição binomial representa o número de sucessos em n ensaios de Bernoulli independentes com probabilidade de sucesso p.',
        email: '$$E[X] = np$$, $$Var(X) = np(1 - p)$$',
    },
    {
        id: 'teorema8',
        title: 'Distribuição de Poisson',
        universe: 'Probabilidade',
        theorem: "$$P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$$",
        description: 'A distribuição de Poisson representa a probabilidade de um número dado de eventos ocorrer em um intervalo fixo de tempo ou espaço, dado uma taxa média de ocorrência conhecida.',
        email: '$$E[X] = \\lambda$$, $$Var(X) = \\lambda$$',
    },
    {
        id: 'teorema9',
        title: 'Distribuição Exponencial',
        universe: 'Probabilidade',
        theorem: "$$f(x; \\lambda) = \\lambda e^{-\\lambda x}$$",
        description: 'A distribuição exponencial representa o tempo entre eventos em um processo de Poisson, com parâmetro de taxa \\(\\lambda\\).',
        email: '$$E[X] = \\frac{1}{\\lambda}$$, $$Var(X) = \\frac{1}{\\lambda^2}$$',
    },
    {
        id: 'teorema10',
        title: 'Distribuição Normal',
        universe: 'Probabilidade',
        theorem: "$$f(x; \\mu, \\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}$$",
        description: 'A distribuição normal, ou distribuição gaussiana, é uma distribuição de probabilidade contínua caracterizada por sua média \\(\\mu\\) e variância \\(\\sigma^2\\).',
        email: '$$E[X] = \\mu$$, $$Var(X) = \\sigma^2$$',
    },
    {
        id: 'teorema11',
        title: 'Covariância',
        universe: 'Estatística',
        theorem: "$$Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$$",
        description: 'A covariância mede o grau em que duas variáveis aleatórias variam juntas. Ela indica a direção da relação linear entre as variáveis.',
        email: '$$Cov(X, Y) = E[XY] - E[X]E[Y]$$',
    },
    {
        id: 'teorema12',
        title: 'Coeficiente de Correlação',
        universe: 'Estatística',
        theorem: "$$\\rho_{X,Y} = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y}$$",
        description: 'O coeficiente de correlação mede a força e a direção da relação linear entre duas variáveis aleatórias, variando de -1 a 1.',
        email: '$$E[X] = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y}$$',
    },
    {
        id: 'teorema13',
        title: 'Distribuição t de Student',
        universe: 'Estatística',
        theorem: "$$f(t; \\nu) = \\frac{\\Gamma\\left(\\frac{\\nu + 1}{2}\\right)}{\\sqrt{\\nu \\pi} \\Gamma\\left(\\frac{\\nu}{2}\\right)} \\left(1 + \\frac{t^2}{\\nu}\\right)^{-\\frac{\\nu + 1}{2}}$$",
        description: 'A distribuição t de Student é usada em testes de hipótese e intervalos de confiança para tamanhos de amostra pequenos, caracterizada pelos seus graus de liberdade \\(\\nu\\).',
        email: '$$t = \\frac{\\bar{X} - \\mu}{s / \\sqrt{n}}$$',
    },
    {
        id: 'teorema14',
        title: 'Distribuição Qui-Quadrado',
        universe: 'Estatística',
        theorem: "$$f(x; \\nu) = \\frac{1}{2^{\\nu / 2} \\Gamma(\\nu / 2)} x^{\\frac{\\nu}{2} - 1} e^{-x / 2}$$",
        description: 'A distribuição qui-quadrado é usada em testes de hipótese, especialmente para testes de independência e ajuste, caracterizada pelos seus graus de liberdade \\(\\nu\\).',
        email: '$$E[X] = \\nu$$, $$Var(X) = 2\\nu$$',
    },
    {
        id: 'teorema15',
        title: 'Distribuição F',
        universe: 'Estatística',
        theorem: "$$f(x; \\nu_1, \\nu_2) = \\frac{\\left(\\frac{\\nu_1}{\\nu_2}\\right)^{\\frac{\\nu_1}{2}} x^{\\frac{\\nu_1}{2} - 1}}{\\left(1 + \\frac{\\nu_1 x}{\\nu_2}\\right)^{\\frac{\\nu_1 + \\nu_2}{2}}}$$",
        description: 'A distribuição F é usada na análise de variância (ANOVA) e na análise de regressão, caracterizada por seus dois parâmetros de graus de liberdade \\(\\nu_1\\) e \\(\\nu_2\\).',
        email: '$$E[X] = \\frac{\\nu_2}{\\nu_2 - 2}$$, $$Var(X) = \\frac{2 \\nu_2^2 (\\nu_1 + \\nu_1 - 2)}{\\nu_1 (\\nu_2 - 2)^2 (\\nu_2 - 4)}$$',
    },
    {
        id: 'teorema16',
        title: 'Desigualdade de Markov',
        universe: 'Probabilidade',
        theorem: "$$P(X \\geq a) \\leq \\frac{E[X]}{a}$$",
        description: 'A Desigualdade de Markov fornece um limite superior sobre a probabilidade de uma variável aleatória não negativa exceder um certo valor.',
        email: '$$P(X \\geq a) \\leq \\frac{E[X]}{a}$$',
    },
    {
        id: 'teorema17',
        title: 'Distribuição F de Fisher-Snedecor',
        universe: 'Estatística',
        theorem: 'A distribuição F de Fisher-Snedecor é usada para testar a razão de duas variâncias de populações normais. Ela é definida como a razão entre duas variâncias amostrais independentes, cada uma dividida por seus respectivos graus de liberdade. Por exemplo, se temos duas amostras independentes com variâncias \( S_1^2 \) e \( S_2^2 \) e graus de liberdade \( d_1 \) e \( d_2 \), o valor da estatística F é dado por: $$ F = \\frac{S_1^2/d_1}{S_2^2/d_2}. $$',
        description: 'A distribuição F é assimétrica e varia com base nos graus de liberdade das amostras. Ela é comumente utilizada em testes de hipóteses, como na ANOVA (Análise de Variância), para comparar variâncias entre grupos. Quanto maior o valor de F, maior a evidência de que as variâncias são diferentes.',
        email: 'A distribuição F é fundamental em testes de hipóteses para avaliar a igualdade de variâncias, sendo amplamente utilizada em análise de regressão e ANOVA.'
    },    
    {
        id: 'teorema18',
        title: 'Convergência em Probabilidade',
        universe: 'Probabilidade',
        theorem: "$$X_n \\xrightarrow{P} X$$ se para todo \\(\\epsilon > 0\\), $$P(|X_n - X| \\geq \\epsilon) \\to 0$$ à medida que \\(n \\to \\infty$$",
        description: 'Uma sequência de variáveis aleatórias \\(X_n\\) converge em probabilidade para uma variável aleatória \\(X\\) se a probabilidade de \\(X_n\\) desviar de \\(X\\) por qualquer quantidade positiva tende a zero à medida que \\(n\\) vai para o infinito.',
        email: '$$X_n \\xrightarrow{P} X$$',
    },
    {
        id: 'teorema19',
        title: 'Lei da Esperança Iterada',
        universe: 'Estatística',
        theorem: "$$E[E[X|Y]] = E[X]$$",
        description: 'A Lei da Esperança Iterada afirma que o valor esperado da expectativa condicional de \\(X\\) dado \\(Y\\) é igual ao valor esperado de \\(X\\).',
        email: '$$E[X] = E[E[X|Y]]$$',
    },
    {
        id: 'teorema20',
        title: 'Desigualdade de Jensen',
        universe: 'Estatística',
        theorem: "$$E[f(X)] \\geq f(E[X])$$ se \\(f\\) for convexa",
        description: 'A Desigualdade de Jensen fornece uma relação entre o valor esperado de uma função convexa de uma variável aleatória e a função do valor esperado dessa variável aleatória.',
        email: '$$E[f(X)] \\geq f(E[X])$$',
    },
    {
        id: 'teorema21',
        title: 'Propriedade Aditiva da Esperança',
        universe: 'Estatística',
        theorem: "$$E[X + Y] = E[X] + E[Y]$$",
        description: 'A Propriedade Aditiva da Esperança afirma que o valor esperado da soma de duas variáveis aleatórias é igual à soma de seus valores esperados, independentemente de sua dependência.',
        email: '$$E[X + Y] = E[X] + E[Y]$$',
    },
    {
        id: 'teorema22',
        title: 'Variância da Soma de Variáveis Aleatórias',
        universe: 'Estatística',
        theorem: "$$Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y)$$",
        description: 'A variância da soma de duas variáveis aleatórias é igual à soma de suas variâncias mais duas vezes sua covariância.',
        email: '$$Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y)$$',
    },
    {
        id: 'teorema23',
        title: 'Esperança Condicional',
        universe: 'Estatística',
        theorem: "$$E[X|Y]$$",
        description: 'A esperança condicional de uma variável aleatória X dado outra variável aleatória Y é o valor esperado de X quando Y é conhecido.',
        email: '$$E[X|Y]$$',
    },
    {
        id: 'teorema24',
        title: 'Função Geradora de Probabilidade',
        universe: 'Probabilidade',
        theorem: "$$G_X(s) = E[s^X]$$",
        description: 'A função geradora de probabilidade é usada para encapsular a distribuição de uma variável aleatória discreta e ajuda a encontrar momentos e probabilidades.',
        email: '$$G_X(s) = E[s^X]$$',
    },
    {
        id: 'teorema25',
        title: 'Função Geradora de Momentos',
        universe: 'Probabilidade',
        theorem: "$$M_X(t) = E[e^{tX}]$$",
        description: 'A função geradora de momentos é usada para encontrar os momentos de uma variável aleatória e pode ajudar a identificar a distribuição de uma variável aleatória.',
        email: '$$M_X(t) = E[e^{tX}]$$',
    },
    {
        id: 'teorema26',
        title: 'Fórmula de Combinação',
        universe: 'Combinatória',
        theorem: "$$C(n, r) = \\frac{n!}{r! \\cdot (n-r)!}$$",
        description: 'O número de maneiras de escolher r elementos de um conjunto de n elementos sem considerar a ordem da seleção.',
        email: '$$n! = n \\times (n-1) \\times \\cdots \\times 1$$',
    },
    {
        id: 'teorema27',
        title: 'Fórmula de Permutação',
        universe: 'Combinatória',
        theorem: "$$P(n, r) = \\frac{n!}{(n-r)!}$$",
        description: 'O número de maneiras de arranjar r elementos de um conjunto de n elementos onde a ordem da seleção importa.',
        email: '$$n! = n \\times (n-1) \\times \\cdots \\times 1$$',
    },
    {
        id: 'teorema28',
        title: 'Teorema Binomial',
        universe: 'Combinatória',
        theorem: "$$(x + y)^n = \\sum_{k=0}^{n} C(n, k) \\cdot x^{n-k} \\cdot y^k$$",
        description: 'Expande um binômio elevado a uma potência em uma soma envolvendo coeficientes binomiais.',
        email: '$$C(n, k) = \\frac{n!}{k! \\cdot (n-k)!}$$',
    },
    {
        id: 'teorema29',
        title: 'Coeficiente Multinomial',
        universe: 'Combinatória',
        theorem: "$$\\frac{n!}{n_1! \\cdot n_2! \\cdots \\cdot n_r!}$$",
        description: 'O número de maneiras de particionar um conjunto de n elementos em r grupos de tamanhos \( n_1, n_2, \\ldots, n_r \).',
        email: '$$n_1 + n_2 + \\cdots + n_r = n$$',
    },
    {
        id: 'teorema30',
        title: 'Aproximação de Stirling',
        universe: 'Combinatória',
        theorem: "$$n! \\approx \\sqrt{2 \\pi n} \\left( \\frac{n}{e} \\right)^n$$",
        description: 'Uma aproximação para fatoriais, útil para valores grandes de n.',
        email: 'Aproximação usada para simplificar expressões fatoriais complexas em problemas combinatórios.',
    },{
        id: 'teorema31',
        title: 'Princípio da Casa dos Pombos',
        universe: 'Combinatória',
        theorem: 'Se mais de n itens forem colocados em n recipientes, então pelo menos um recipiente deve conter mais de um item.',
        description: 'Um princípio básico usado para provar a existência de certas condições em problemas combinatórios.',
        email: 'Útil na prova da existência de elementos repetidos sob certas condições.',
    },
    {
        id: 'teorema32',
        title: 'Princípio da Inclusão-Exclusão',
        universe: 'Combinatória',
        theorem: "$$|A \\cup B| = |A| + |B| - |A \\cap B|$$",
        description: 'Calcula a cardinalidade da união de conjuntos somando os tamanhos dos conjuntos individuais e subtraindo o tamanho da interseção.',
        email: 'Pode ser generalizado para mais de dois conjuntos.',
    },
    {
        id: 'teorema33',
        title: 'Número de Catalan',
        universe: 'Combinatória',
        theorem: "$$C_n = \\frac{1}{n+1} \\binom{2n}{n}$$",
        description: 'Conta o número de maneiras de combinar corretamente parênteses, o número de árvores binárias enraizadas com n+1 folhas e muitas outras estruturas combinatórias.',
        email: '$$\\binom{2n}{n} = \\frac{(2n)!}{n! \\cdot n!}$$',
    },
    {
        id: 'teorema34',
        title: 'Distribuição Multinomial',
        universe: 'Probabilidade',
        theorem: "$$P(X_1 = x_1, \\dots, X_k = x_k) = \\frac{n!}{x_1! \\cdot x_2! \\cdots x_k!} p_1^{x_1} p_2^{x_2} \\dots p_k^{x_k}$$",
        description: 'A probabilidade de obter uma combinação específica de resultados em n tentativas independentes, onde cada tentativa pode resultar em um dos k possíveis resultados com probabilidades fixas.',
        email: '$$x_1 + x_2 + \\dots + x_k = n$$',
    },
    {
        id: 'teorema35',
        title: 'Distribuição Hipergeométrica',
        universe: 'Probabilidade',
        theorem: "$$P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}$$",
        description: 'A probabilidade de k sucessos em n extrações de uma população finita de tamanho N contendo exatamente K sucessos, sem reposição.',
        email: '$$\\binom{n}{k} = \\frac{n!}{k! (n-k)!}$$',
    },
    {
        id: 'teorema36',
        title: 'Probabilidade de Todas as Permutações',
        universe: 'Probabilidade',
        theorem: "$$P = \\frac{1}{n!}$$",
        description: 'A probabilidade de qualquer arranjo (permutação) particular de n elementos distintos quando todas as permutações são igualmente prováveis.',
        email: 'Cada permutação é igualmente provável entre um total de n! permutações.',
    },
    {
        id: 'teorema37',
        title: 'Distribuição Geométrica',
        universe: 'Probabilidade',
        theorem: "$$P(X = k) = (1 - p)^{k-1} p$$",
        description: 'A probabilidade de que o primeiro sucesso ocorra na k-ésima tentativa em uma sequência de tentativas de Bernoulli independentes com probabilidade de sucesso p.',
        email: 'Modela o número de falhas antes do primeiro sucesso.',
    },
    {
        id: 'teorema38',
        title: 'Distribuição Binomial Negativa',
        universe: 'Probabilidade',
        theorem: "$$P(X = k) = \\binom{k + r - 1}{k} p^r (1 - p)^k$$",
        description: 'A probabilidade de ter k falhas antes de alcançar o r-ésimo sucesso em uma sequência de tentativas de Bernoulli independentes com probabilidade de sucesso p.',
        email: '$$\\binom{k + r - 1}{k} = \\frac{(k + r - 1)!}{k! (r - 1)!}$$',
    },
    {
        id: 'teorema39',
        title: 'Triângulo de Pascal',
        universe: 'Combinatória',
        theorem: "$$\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$$",
        description: 'O Triângulo de Pascal é uma matriz triangular de coeficientes binomiais. Cada número é a soma dos dois diretamente acima dele. A n-ésima linha corresponde aos coeficientes da expansão binomial \\((a + b)^n\\).',
        email: 'Útil para encontrar combinações, expansões binomiais e propriedades relacionadas a coeficientes binomiais.',
    },
    {
        id: 'teorema40',
        title: 'Variância',
        universe: 'Estatística',
        theorem: "$$Var(X) = E[(X - E(X))^2]$$",
        description: 'A variância mede quanto os valores de uma variável aleatória diferem da média da distribuição. É o valor esperado das desvios quadráticos em relação à média.',
        email: '$$Var(X) = \\sigma^2$$',
    },{
        id: 'teorema41',
        title: 'Probabilidade Condicional',
        universe: 'Probabilidade',
        theorem: "$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$",
        description: 'A probabilidade do evento A ocorrer dado que o evento B ocorreu, calculada usando a probabilidade conjunta de A e B dividida pela probabilidade de B.',
        email: '$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$',
    },
    {
        id: 'teorema42',
        title: 'Intervalo de Confiança para a Média',
        universe: 'Estatística',
        theorem: "$$\\bar{X} \\pm z \\frac{\\sigma}{\\sqrt{n}}$$",
        description: 'O intervalo de confiança para a média estima a faixa na qual a média populacional provavelmente se encontra, com base na média amostral, desvio padrão e o valor z correspondente ao nível de confiança desejado.',
        email: '$$CI = [\\bar{X} - ME, \\bar{X} + ME], \\quad ME = z \\frac{\\sigma}{\\sqrt{n}}$$',
    },
    {
        id: 'teorema43',
        title: 'Distribuição Uniforme',
        universe: 'Probabilidade',
        theorem: "$$f(x) = \\frac{1}{b - a}, \\quad a \\leq x \\leq b$$",
        description: 'A distribuição uniforme é uma distribuição de probabilidade contínua onde todos os intervalos de mesma extensão dentro do alcance da distribuição são igualmente prováveis.',
        email: '$$E(X) = \\frac{a + b}{2}, \\quad Var(X) = \\frac{(b - a)^2}{12}$$',
    },
    {
        id: 'teorema44',
        title: 'Probabilidade Conjunta',
        universe: 'Probabilidade',
        theorem: "$$P(A \\cap B) = P(A|B) \\cdot P(B)$$",
        description: 'A probabilidade conjunta de dois eventos A e B é a probabilidade de que ambos os eventos ocorram simultaneamente. Pode ser encontrada multiplicando a probabilidade de A dado B pela probabilidade de B.',
        email: '$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$',
    },
    {
        id: 'teorema45',
        title: 'Valor Esperado de uma Variável Aleatória Discreta',
        universe: 'Estatística',
        theorem: "$$E(X) = \\sum_{i=1}^{n} x_i P(X = x_i)$$",
        description: 'O valor esperado (média) de uma variável aleatória discreta é a soma de todos os possíveis valores da variável, cada um multiplicado pela sua respectiva probabilidade.',
        email: '$$E(aX + b) = aE(X) + b$$',
    },
    {
        id: 'teorema46',
        title: 'Desigualdade de Cauchy-Schwarz',
        universe: 'Estatística',
        theorem: "$$(E[XY])^2 \\leq E[X^2]E[Y^2]$$",
        description: 'A desigualdade de Cauchy-Schwarz em probabilidade e estatística afirma que o quadrado da expectativa do produto de duas variáveis aleatórias é menor ou igual ao produto de suas variâncias.',
        email: '$$|Cov(X, Y)| \\leq \\sigma_X \\sigma_Y$$',
    },
    {
        id: 'teorema47',
        title: 'Função Densidade de Probabilidade (PDF)',
        universe: 'Probabilidade',
        theorem: "$$P(a \\leq X \\leq b) = \\int_{a}^{b} f(x) \\, dx$$",
        description: 'Uma função densidade de probabilidade (PDF) representa a probabilidade de uma variável aleatória contínua assumir um valor específico. A área sob a curva da PDF em um intervalo fornece a probabilidade de que a variável caia dentro desse intervalo.',
        email: '$$f(x) \\geq 0, \\quad \\int_{-\\infty}^{\\infty} f(x) \\, dx = 1$$',
    },
    {
        id: 'teorema48',
        title: 'Função de Distribuição Acumulada (CDF)',
        universe: 'Probabilidade',
        theorem: "$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t) \\, dt$$",
        description: 'A função de distribuição acumulada (CDF) de uma variável aleatória X fornece a probabilidade de que X assuma um valor menor ou igual a x. É a integral da função densidade de probabilidade (PDF).',
        email: '$$0 \\leq F(x) \\leq 1, \\quad \\lim_{x \\to -\\infty} F(x) = 0, \\quad \\lim_{x \\to \\infty} F(x) = 1$$',
    },
    {
        id: 'teorema49',
        title: 'Variância da Amostra',
        universe: 'Estatística',
        theorem: "$$s^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$$",
        description: 'A variância da amostra é uma medida da dispersão dos pontos de dados da amostra. É calculada fazendo a média dos desvios quadráticos de cada ponto da amostra em relação à média amostral.',
        email: '$$s = \\sqrt{s^2}$$',
    },
    {
        id: 'teorema50',
        title: 'Método de Monte Carlo',
        universe: 'Probabilidade & Estatística',
        theorem: 'Estimativa $$E[f(X)] \\approx \\frac{1}{N} \\sum_{i=1}^{N} f(X_i), \\quad X_i \\sim p(X)$$',
        description: 'O método de Monte Carlo é um algoritmo computacional que depende de amostragem aleatória repetida para obter resultados numéricos. É usado para estimar funções matemáticas ou simular o comportamento de sistemas complexos.',
        email: 'Para integração, $$\\int_{a}^{b} f(x) dx \\approx \\frac{b-a}{N} \\sum_{i=1}^{N} f(X_i), \\quad X_i \\sim U(a, b)$$',
    },{
        id: 'teorema51',
        title: 'Teste de Razão de Verossimilhança',
        universe: 'Estatística',
        theorem: "$$\\Lambda = \\frac{L(\\theta_0)}{L(\\hat{\\theta})}$$",
        description: 'O teste de razão de verossimilhança é um teste estatístico para comparar o ajuste de dois modelos: um modelo nulo (com parâmetro \\(\\theta_0\\)) e um modelo alternativo (com parâmetro \\(\\hat{\\theta}\\)). Ele testa a hipótese nula de que o modelo mais simples é suficiente.',
        email: 'Usado para derivar estatísticas de teste em testes de hipótese.',
    },
    {
        id: 'teorema52',
        title: 'WLLN (Lei Fraca dos Grandes Números)',
        universe: 'Probabilidade',
        theorem: "$$P \\left( \\left| \\bar{X}_n - \\mu \\right| \\geq \\epsilon \\right) \\to 0 \\text{ quando } n \\to \\infty$$",
        description: 'A Lei Fraca dos Grandes Números afirma que a média amostral \\(\\bar{X}_n\\) converge em probabilidade para a média populacional \\(\\mu\\) à medida que o tamanho da amostra \\(n\\) aumenta.',
        email: 'Convergência em probabilidade, não quase seguramente.',
    },
    {
        id: 'teorema53',
        title: 'Método Bootstrap',
        universe: 'Estatística',
        theorem: 'Aproximar $$\\hat{\\theta} = \\frac{1}{B} \\sum_{i=1}^{B} \\hat{\\theta}^*_i$$ por reamostragem.',
        description: 'O Método Bootstrap é uma técnica de reamostragem usada para estimar estatísticas em uma população, amostrando um conjunto de dados com reposição. Permite a estimativa da distribuição amostral de quase qualquer estatística.',
        email: 'Útil para estimar a variância, viés e construir intervalos de confiança.',
    },
    {
        id: 'teorema54',
        title: 'Informação de Fisher',
        universe: 'Estatística',
        theorem: "$$I(\\theta) = -E \\left[ \\frac{\\partial^2}{\\partial \\theta^2} \\log L(\\theta; X) \\right]$$",
        description: 'A Informação de Fisher mede a quantidade de informação que uma variável aleatória observável carrega sobre um parâmetro desconhecido do qual depende a probabilidade da variável aleatória. Tem um papel central na estimativa de parâmetros.',
        email: 'O inverso da Informação de Fisher fornece o limite inferior de Cramér-Rao.',
    },
    {
        id: 'teorema55',
        title: 'Teorema de Bayes (Estendido)',
        universe: 'Probabilidade',
        theorem: "$$P(A_i|B) = \\frac{P(B|A_i) P(A_i)}{\\sum_{j=1}^{n} P(B|A_j) P(A_j)}$$",
        description: 'Uma extensão do teorema de Bayes que leva em conta múltiplos eventos \\(A_1, A_2, ..., A_n\\) que particionam o espaço amostral. É frequentemente usado no contexto da inferência bayesiana.',
        email: 'O denominador é a Lei da Probabilidade Total.',
    },
    {
        id: 'teorema56',
        title: 'Estimativa de Máxima Verossimilhança (MLE)',
        universe: 'Estatística',
        theorem: "Encontrar \\(\\hat{\\theta}\\) que maximiza a verossimilhança: $$L(\\theta; x_1, x_2, ..., x_n) = \\prod_{i=1}^{n} f(x_i | \\theta)$$",
        description: 'MLE é um método para estimar os parâmetros de um modelo estatístico. Ele encontra os valores dos parâmetros que maximizam a função de verossimilhança, que mede quão provável são os dados observados dados os parâmetros.',
        email: 'Frequentemente requer métodos numéricos para resolver em modelos complexos.',
    },
    {
        id: 'teorema57',
        title: 'Cramer’s V',
        universe: 'Estatística',
        theorem: "$$V = \\sqrt{\\frac{\\chi^2}{n \\cdot min(r - 1, c - 1)}}$$",
        description: 'Cramer’s V é uma medida de associação entre duas variáveis nominais, fornecendo um valor entre 0 (nenhuma associação) e 1 (associação perfeita). Baseia-se na estatística qui-quadrado.',
        email: 'Cramer’s V é útil para tabelas de contingência de qualquer tamanho.',
    },
    {
        id: 'teorema58',
        title: 'Divergência de Kullback-Leibler',
        universe: 'Probabilidade & Teoria da Informação',
        theorem: "$$D_{KL}(P || Q) = \\sum_{x} P(x) \\log \\frac{P(x)}{Q(x)}$$",
        description: 'A divergência de Kullback-Leibler mede a diferença entre duas distribuições de probabilidade. Quantifica quanta informação é perdida ao aproximar uma distribuição com outra.',
        email: 'Não simétrica; usada em aprendizado de máquina e estatística.',
    },
    {
        id: 'teorema59',
        title: 'Distância de Variação Total',
        universe: 'Probabilidade',
        theorem: "$$d_{TV}(P, Q) = \\frac{1}{2} \\sum_{x} |P(x) - Q(x)|$$",
        description: 'A Distância de Variação Total entre duas distribuições de probabilidade é uma medida da maior diferença entre as probabilidades atribuídas pelas duas distribuições sobre todos os eventos possíveis.',
        email: 'Varia de 0 (distribuições idênticas) a 1 (completamente diferentes).',
    },
    {
        id: 'teorema60',
        title: 'Coeficiente de Correlação de Classificação de Spearman',
        universe: 'Estatística',
        theorem: "$$\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$$",
        description: 'A correlação de classificação de Spearman mede a força e a direção da associação entre duas variáveis classificadas. É uma medida não paramétrica que avalia quão bem a relação entre duas variáveis pode ser descrita usando uma função monótona.',
        email: 'Os valores variam de -1 (correlação negativa perfeita) a +1 (correlação positiva perfeita).',
    },{
        id: 'teorema61',
        title: 'Valor-p',
        universe: 'Estatística',
        theorem: "O valor-p é: $$P(\\text{Estatística de Teste} \\geq \\text{Valor Observado} | H_0)$$",
        description: 'O valor-p mede a probabilidade de obter uma estatística de teste pelo menos tão extrema quanto a observada, assumindo que a hipótese nula é verdadeira. Ele é usado para avaliar a força da evidência contra a hipótese nula.',
        email: 'Um valor-p pequeno (geralmente ≤ 0,05) indica uma evidência forte contra a hipótese nula.',
    },
    {
        id: 'teorema62',
        title: 'Teste de Kolmogorov-Smirnov',
        universe: 'Estatística',
        theorem: "$$D_n = \\sup_x |F_n(x) - F(x)|$$",
        description: 'O teste de Kolmogorov-Smirnov é um teste não paramétrico que compara a função de distribuição empírica de uma amostra com uma distribuição de probabilidade de referência (ou compara duas distribuições empíricas) para determinar se elas diferem significativamente.',
        email: 'Utilizado para testar ajuste de modelos e comparar distribuições.',
    },
    {
        id: 'teorema63',
        title: 'Teorema de Gauss-Markov',
        universe: 'Estatística',
        theorem: 'Em um modelo de regressão linear, o estimador de mínimos quadrados ordinários (MQO) é o melhor estimador linear não tendencioso (BLUE) dos coeficientes.',
        description: 'O teorema de Gauss-Markov afirma que, sob certas condições (como linearidade, homocedasticidade e independência dos erros), o estimador MQO tem a menor variância entre todos os estimadores lineares não tendenciosos.',
        email: 'Assume que os erros têm média zero e variância constante.',
    },
    {
        id: 'teorema64',
        title: 'Lema de Neyman-Pearson',
        universe: 'Estatística',
        theorem: 'O teste mais poderoso para uma hipótese nula simples contra uma hipótese alternativa simples maximiza a razão de verossimilhança: $$\\frac{f(x; \\theta_1)}{f(x; \\theta_0)} \\geq k$$.',
        description: 'O lema de Neyman-Pearson fornece um quadro para construir o teste estatístico mais poderoso para um dado tamanho ao testar entre duas hipóteses simples.',
        email: 'Usado como base para testes de razão de verossimilhança.',
    },
    {
        id: 'teorema65',
        title: 'Teste de Wald',
        universe: 'Estatística',
        theorem: "$$W = \\frac{(\\hat{\\theta} - \\theta_0)^2}{\\text{Var}(\\hat{\\theta})}$$",
        description: 'O teste de Wald avalia a significância dos coeficientes individuais em modelos estatísticos. Ele compara o parâmetro estimado com um valor hipotetizado, ajustando pelo erro padrão.',
        email: 'Comumente utilizado em análise de regressão e modelos lineares generalizados.',
    },
    {
        id: 'teorema66',
        title: 'Teste de Shapiro-Wilk',
        universe: 'Estatística',
        theorem: 'A estatística do teste de Shapiro-Wilk é dada por: $$W = \\frac{(\\sum_{i=1}^{n} a_i X_{(i)})^2}{\\sum_{i=1}^{n} (X_i - \\bar{X})^2},$$ onde \\(X_{(i)}\\) são os valores da amostra ordenados, \\(a_i\\) são constantes derivadas da matriz de covariância das estatísticas de ordem de uma distribuição normal, e \\(\\bar{X}\\) é a média da amostra.',
        description: 'O teste de Shapiro-Wilk avalia a normalidade de uma amostra de dados. Ele testa a hipótese nula de que a amostra vem de uma população normalmente distribuída. Um p-valor pequeno (geralmente ≤ 0,05) indica que a hipótese nula pode ser rejeitada, sugerindo que os dados não são normalmente distribuídos.',
        email: 'O teste de Shapiro-Wilk é mais poderoso para tamanhos de amostra pequenos em comparação com outros testes de normalidade.',
    },
    {
        id: 'teorema67',
        title: 'Valor Esperado de uma Variável Aleatória Contínua',
        universe: 'Estatística',
        theorem: 'Para uma variável aleatória contínua \\(X\\) com função de densidade de probabilidade (PDF) \\(f(x)\\): $$E(X) = \\int_{-\\infty}^{\infty} x f(x) \\, dx.$$',
        description: 'O valor esperado (ou média) de uma variável aleatória contínua representa o centro de sua distribuição de probabilidade. É a média ponderada de todos os valores possíveis, com pesos dados por sua densidade de probabilidade.',
        email: 'O valor esperado é um conceito fundamental em probabilidade, frequentemente usado para resumir a tendência central da distribuição de uma variável aleatória.',
    },
    {
        id: 'teorema68',
        title: 'Espaço Amostral',
        universe: 'Probabilidade',
        theorem: 'O espaço amostral \\(\\Omega\\) é o conjunto de todos os possíveis resultados de um experimento aleatório. Por exemplo, em um único lançamento de um dado justo de seis lados, o espaço amostral é \\(\\Omega = \\{1, 2, 3, 4, 5, 6\\}\\).',
        description: 'O espaço amostral é um conceito fundamental na teoria da probabilidade, representando o conjunto completo de resultados que podem ocorrer em um experimento aleatório. Cada resultado no espaço amostral é mutuamente exclusivo, e a soma das probabilidades de todos os resultados é 1.',
        email: 'O espaço amostral pode ser finito ou infinito, dependendo da natureza do experimento aleatório.',
    },
    {
        id: 'teorema69',
        title: 'Evento',
        universe: 'Probabilidade',
        theorem: 'Um evento \\(E\\) é um subconjunto do espaço amostral \\(\\Omega\\). Ele consiste em um ou mais resultados de um experimento aleatório. Por exemplo, se \\(\\Omega = \\{1, 2, 3, 4, 5, 6\\}\\) é o espaço amostral para o lançamento de um dado justo de seis lados, então o evento \\(E = \\{2, 4, 6\\}\\) representa o lançamento de um número par.',
        description: 'Na teoria da probabilidade, um evento é um conjunto de resultados de um experimento aleatório. Eventos podem ser simples (consistindo de um único resultado) ou compostos (consistindo de vários resultados). A probabilidade de um evento é a medida da probabilidade de que o evento ocorra, calculada como \\(P(E)\\).',
        email: 'Os eventos são frequentemente classificados como mutuamente exclusivos, independentes ou complementares com base em suas relações com outros eventos.',
    },
    {
        id: 'teorema70',
        title: 'Axioma 1 da Probabilidade: Não Negatividade',
        universe: 'Probabilidade',
        theorem: 'Para qualquer evento \\(E\\), \\(P(E) \\geq 0\\).',
        description: 'A probabilidade de qualquer evento é sempre não negativa. Este axioma assegura que as probabilidades são sempre maiores ou iguais a zero, refletindo o fato de que probabilidades não podem ser negativas.',
        email: 'A não negatividade é uma propriedade fundamental que deve valer para qualquer medida de probabilidade válida.',
    },{
        id: 'teorema71',
        title: 'Axioma 2 da Probabilidade: Normalização',
        universe: 'Probabilidade',
        theorem: 'A probabilidade do espaço amostral \\(\\Omega\\) é 1: $$P(\\Omega) = 1.$$',
        description: 'Este axioma afirma que a probabilidade do espaço amostral, que inclui todos os possíveis resultados de um experimento aleatório, é igual a 1. Isso reflete a certeza de que um dos resultados no espaço amostral ocorrerá.',
        email: 'A normalização garante que a probabilidade total entre todos os resultados possíveis seja 1.',
    },
    {
        id: 'teorema72',
        title: 'Axioma 3 da Probabilidade: Aditividade',
        universe: 'Probabilidade',
        theorem: 'Para quaisquer dois eventos mutuamente exclusivos (disjuntos) \\(E_1\\) e \\(E_2\\), a probabilidade da união deles é a soma de suas probabilidades: $$P(E_1 \\cup E_2) = P(E_1) + P(E_2).$$',
        description: 'Se dois eventos não podem ocorrer ao mesmo tempo (ou seja, são mutuamente exclusivos), então a probabilidade de ocorrer um ou outro evento é a soma de suas probabilidades individuais.',
        email: 'A aditividade é crucial para calcular probabilidades de eventos combinados, especialmente em cenários complexos envolvendo múltiplos resultados.',
    },
    {
        id: 'teorema73',
        title: 'Processo Estocástico',
        universe: 'Probabilidade',
        theorem: 'Um processo estocástico é uma coleção de variáveis aleatórias \\(\\{X(t) : t \\in T\\}\\) indexadas por um parâmetro \\(t\\) de um conjunto índice \\(T\\). O processo descreve a evolução de um sistema ao longo do tempo ou do espaço.',
        description: 'Um processo estocástico é usado para modelar sistemas que evoluem de maneira probabilística. Exemplos incluem preços de ações, padrões climáticos e filas em sistemas de atendimento. O conjunto índice \\(T\\) pode representar o tempo ou outro parâmetro, e cada variável aleatória \\(X(t)\\) representa o estado do sistema em um dado índice.',
        email: 'Processos estocásticos são fundamentais em áreas como finanças, teoria de filas e mecânica estatística, onde são usados para analisar e prever sistemas e fenômenos complexos.',
    },
    {
        id: 'teorema74',
        title: 'Distribuição de Pareto',
        universe: 'Probabilidade',
        theorem: 'A função de densidade de probabilidade (PDF) da distribuição de Pareto é dada por: $$f(x; \\alpha, x_m) = \\frac{\\alpha x_m^\\alpha}{x^{\\alpha+1}}, \\text{ para } x \\geq x_m,$$ onde \\(\\alpha\\) é o parâmetro de forma e \\(x_m\\) é o parâmetro de escala.',
        description: 'A distribuição de Pareto é usada para modelar distribuições de riqueza, renda e outras quantidades onde uma pequena proporção da população detém a maior parte da quantidade total. Ela é caracterizada por sua cauda pesada, o que significa que valores extremos são mais prováveis do que em uma distribuição normal.',
        email: 'A média da distribuição de Pareto existe apenas se \\(\\alpha > 1\\) e é dada por: $$E(X) = \\frac{\\alpha x_m}{\\alpha - 1}, \\text{ para } \\alpha > 1.$$',
    },    
    {
        id: 'teorema75',
        title: 'Regressão Linear',
        universe: 'Estatística',
        theorem: 'No modelo de regressão linear, a relação entre a variável dependente \\(Y\\) e a variável independente \\(X\\) é dada pela equação: $$Y = \\beta_0 + \\beta_1 X + \\epsilon,$$ onde \\(\\beta_0\\) é o intercepto, \\(\\beta_1\\) é o coeficiente da variável independente e \\(\\epsilon\\) representa o erro aleatório.',
        description: 'A regressão linear é uma técnica estatística utilizada para modelar a relação entre uma variável dependente e uma ou mais variáveis independentes. O objetivo é encontrar a melhor linha reta que minimize a soma dos quadrados dos erros entre os valores observados e os valores previstos.',
        email: 'Os coeficientes \\(\\beta\\) podem ser estimados utilizando o método dos mínimos quadrados.',
    },
    {
        id: 'teorema76',
        title: 'Regressão Logística',
        universe: 'Estatística',
        theorem: 'A regressão logística modela a probabilidade de um evento binário \\(Y\\) como: $$P(Y = 1 | X) = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 X)}}.$$',
        description: 'A regressão logística é utilizada para modelar a relação entre uma variável dependente categórica (normalmente binária) e uma ou mais variáveis independentes. Ela estima as probabilidades que um evento ocorra, permitindo interpretar os resultados em termos de odds.',
        email: 'Os coeficientes são estimados através da maximização da função de verossimilhança.',
    },
    
    {
        id: 'teorema77',
        title: 'Regressão Polinomial',
        universe: 'Estatística',
        theorem: 'A regressão polinomial é expressa como: $$Y = \\beta_0 + \\beta_1 X + \\beta_2 X^2 + ... + \\beta_n X^n + \\epsilon.$$',
        description: 'A regressão polinomial é uma extensão da regressão linear que permite modelar relações não lineares ao incluir termos de potência da variável independente. Isso é útil quando os dados apresentam uma curvatura.',
        email: 'Os coeficientes são estimados utilizando o método dos mínimos quadrados, assim como na regressão linear.',
    },
    
    {
        id: 'teorema78',
        title: 'Regressão Ridge',
        universe: 'Estatística',
        theorem: 'A regressão ridge modifica a função de custo da regressão linear adicionando um termo de penalização: $$J(\\beta) = ||Y - X\\beta||^2 + \\lambda ||\\beta||^2,$$ onde \\(\\lambda\\) é um parâmetro de regularização.',
        description: 'A regressão ridge é uma técnica utilizada para lidar com multicolinearidade entre variáveis independentes. A penalização ajuda a reduzir a complexidade do modelo e evitar overfitting.',
        email: 'Escolher \\(\\lambda\\) adequadamente é crucial para o desempenho do modelo.',
    },
    
    {
        id: 'teorema79',
        title: 'Regressão Lasso',
        universe: 'Estatística',
        theorem: 'A regressão lasso modifica a função de custo da regressão linear com uma penalização L1: $$J(\\beta) = ||Y - X\\beta||^2 + \\lambda ||\\beta||_1,$$ onde \\(\\lambda\\) é um parâmetro de regularização.',
        description: 'A regressão lasso também é usada para evitar overfitting e pode realizar seleção de variáveis, pois pode zerar coeficientes de variáveis irrelevantes, resultando em modelos mais simples.',
        email: 'A escolha de \\(\\lambda\\) é crítica para balancear viés e variância.',
    },
    
    {
        id: 'teorema80',
        title: 'Regressão Elastic Net',
        universe: 'Estatística',
        theorem: 'A regressão elastic net combina penalizações L1 e L2 na função de custo: $$J(\\beta) = ||Y - X\\beta||^2 + \\lambda_1 ||\\beta||_1 + \\lambda_2 ||\\beta||^2.$$',
        description: 'A regressão elastic net é útil quando existem muitas variáveis correlacionadas, combinando as vantagens da regressão lasso e ridge. Ela realiza seleção de variáveis e também controla a complexidade do modelo.',
        email: 'A escolha dos parâmetros \\(\\lambda_1\\) e \\(\\lambda_2\\) é importante para o ajuste do modelo.',
    },    
    {
        id: 'teorema81',
        title: 'Coeficiente da Correlação de Pearson',
        universe: 'Estatística',
        theorem: 'A correlação de Pearson mede a força e a direção da associação linear entre duas variáveis quantitativas, definida pela fórmula: $$r = \\frac{\\sum{(x_i - \\bar{x})(y_i - \\bar{y})}}{\\sqrt{\\sum{(x_i - \\bar{x})^2} \\sum{(y_i - \\bar{y})^2}}}.$$',
        description: 'O coeficiente de correlação de Pearson varia de -1 a 1, onde valores próximos a 1 indicam uma forte correlação positiva, valores próximos a -1 indicam uma forte correlação negativa e valores próximos a 0 indicam ausência de correlação linear. Ele é usado para determinar a relação linear entre duas variáveis, sendo sensível a outliers e pressupõe normalidade dos dados.',
        email: 'A interpretação do coeficiente de correlação de Pearson é importante para entender a força da relação linear entre variáveis.'
    },
    {
        id: 'teorema82',
        title: 'Média Aritmética',
        universe: 'Estatística',
        theorem: 'A média aritmética é uma medida de tendência central que calcula o valor médio de um conjunto de dados somando todos os valores e dividindo pelo número total de observações: $$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}.$$',
        description: 'A média aritmética é amplamente usada para representar um valor típico em um conjunto de dados. Ela é sensível a valores extremos (outliers) e é apropriada quando os dados estão distribuídos de forma relativamente simétrica.',
        email: 'A média é uma das medidas de tendência central mais usadas em estatística e é simples de calcular e interpretar.'
    },
    {
        id: 'teorema83',
        title: 'Média Geométrica',
        universe: 'Estatística',
        theorem: 'A média geométrica é uma medida de tendência central calculada como a raiz n-ésima do produto dos valores: $$\\bar{x}_{geom} = \\sqrt[n]{\\prod_{i=1}^{n} x_i}.$$',
        description: 'A média geométrica é útil em situações onde os valores são multiplicativos, como no cálculo de taxas de crescimento ou variações percentuais. Ela é menos sensível a valores extremos comparada à média aritmética.',
        email: 'A média geométrica é recomendada quando se trabalha com dados que variam em ordem de grandeza ou para calcular médias de proporções.'
    },
    {
        id: 'teorema84',
        title: 'Média Harmônica',
        universe: 'Estatística',
        theorem: 'A média harmônica é a medida de tendência central calculada como o inverso da média dos inversos dos valores: $$\\bar{x}_{harm} = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}}.$$',
        description: 'A média harmônica é especialmente útil para dados envolvendo taxas ou razões, como velocidades médias. Ela atribui mais peso aos valores menores e menos peso aos valores maiores.',
        email: 'A média harmônica é recomendada para médias de velocidades ou fluxos e quando os dados são distribuídos de maneira inversamente proporcional.'
    },
    {
        id: 'teorema85',
        title: 'Média Ponderada',
        universe: 'Estatística',
        theorem: 'A média ponderada é calculada atribuindo pesos a cada valor, refletindo sua importância relativa: $$\\bar{x}_{pond} = \\frac{\\sum_{i=1}^{n} w_i x_i}{\\sum_{i=1}^{n} w_i}.$$',
        description: 'A média ponderada é útil quando nem todos os valores têm a mesma importância. Ela permite que se atribuam pesos para calcular um valor médio que reflete essa diferença de importância.',
        email: 'A média ponderada é amplamente usada em análises financeiras, onde diferentes ativos têm diferentes relevâncias, ou em pesquisas, onde respostas podem ter diferentes pesos.'
    },
    {
        id: 'teorema86',
        title: 'Moda',
        universe: 'Estatística',
        theorem: 'A moda é a medida de tendência central que identifica o valor ou valores que aparecem com mais frequência em um conjunto de dados. Por exemplo, em um conjunto de dados como [2, 3, 4, 4, 5], a moda é 4, pois é o valor que mais se repete. Diferentemente da média ou da mediana, a moda pode ser usada para dados categóricos.',
        description: 'A moda é útil para dados qualitativos e quantitativos, especialmente em distribuições assimétricas ou multimodais. Um conjunto de dados pode ter uma única moda (unimodal), mais de uma moda (bimodal ou multimodal), ou nenhuma moda.',
        email: 'A moda é uma medida simples de tendência central, particularmente útil para entender a frequência de ocorrências em distribuições de dados categóricos.'
    },
    {
        id: 'teorema87',
        title: 'Mediana',
        universe: 'Estatística',
        theorem: 'A mediana é a medida de tendência central que representa o valor central de um conjunto de dados ordenados. Por exemplo, em um conjunto de dados como [3, 5, 7], a mediana é 5, pois é o valor do meio. Quando o número de observações é par, como em [3, 5, 7, 9], a mediana é a média dos dois valores centrais, que é (5 + 7) / 2 = 6.',
        description: 'A mediana é útil para descrever distribuições assimétricas, já que é menos sensível a valores extremos (outliers) do que a média aritmética. Ela divide o conjunto de dados em duas metades: metade dos valores são menores ou iguais à mediana, e metade são maiores ou iguais.',
        email: 'A mediana é uma medida robusta de tendência central, frequentemente utilizada quando há outliers ou uma distribuição enviesada nos dados.'
    },
    {
        id: 'teorema88',
        title: 'Equação de Drake',
        universe: 'Astrobiologia',
        theorem: 'A Equação de Drake é uma fórmula probabilística usada para estimar o número de civilizações extraterrestres ativas e comunicativas na galáxia Via Láctea. Ela é expressa como: $$ N = R_* \\times f_p \\times n_e \\times f_l \\times f_i \\times f_c \\times L $$',
        description: 'onde: \n- \( N \) é o número de civilizações com as quais poderíamos nos comunicar, \n- \( R_* \) é a taxa de formação estelar, \n- \( f_p \) é a fração de estrelas com sistemas planetários, \n- \( n_e \) é o número de planetas por estrela que podem suportar vida, \n- \( f_l \) é a fração de planetas onde a vida realmente se desenvolve, \n- \( f_i \) é a fração de planetas com vida inteligente, \n- \( f_c \) é a fração de civilizações que desenvolvem tecnologia para se comunicar, \n- \( L \) é o tempo de duração em que essas civilizações podem se comunicar.',
        email: 'A Equação de Drake é frequentemente usada como uma ferramenta para estimular o pensamento científico sobre a busca por inteligência extraterrestre (SETI) e para entender os fatores necessários para a vida evoluir e persistir no universo.'
    },
    {
        "id": "teorema89",
        "title": "Regra de Três",
        "universe": "Matemática",
        "theorem": "A Regra de Três é um método matemático utilizado para resolver problemas de proporção, permitindo encontrar um valor desconhecido quando há uma relação de proporcionalidade direta ou inversa entre três valores conhecidos. A fórmula básica é expressa como: $$ \\frac{a}{b} = \\frac{c}{x} $$, onde \( x \) é o valor que queremos encontrar.",
        "description": "onde: \n- \( a \) e \( b \) são valores conhecidos que possuem uma relação direta ou inversa entre si, \n- \( c \) é outro valor conhecido que está relacionado a \( x \), \n- \( x \) é o valor desconhecido que queremos descobrir.",
        "email": "A Regra de Três é amplamente utilizada em problemas cotidianos e científicos para calcular proporções, desde simples cálculos financeiros até situações complexas em física e química."
    },
    {
        id: 'teorema90',
        title: 'Análise de Variância (ANOVA)',
        universe: 'Estatística',
        theorem: 'A ANOVA, ou Análise de Variância, é um método estatístico utilizado para comparar as médias de três ou mais grupos, a fim de determinar se pelo menos uma delas é significativamente diferente das demais. Ela baseia-se na divisão da variabilidade total dos dados em variabilidade "entre os grupos" e "dentro dos grupos". O estatístico F na ANOVA é calculado dividindo a média dos quadrados entre grupos pela média dos quadrados dentro dos grupos. Matematicamente, é expresso como: $$ F = \\frac{MS_{entre}}{MS_{dentro}} $$ onde $$ MS_{entre} = \\frac{SS_{entre}}{gl_{entre}} $$ e $$ MS_{dentro} = \\frac{SS_{dentro}}{gl_{dentro}} $$ com \( SS \) representando a soma dos quadrados e \( gl \) os graus de liberdade.',
        description: 'A ANOVA é uma técnica fundamental na estatística, usada para testar se há diferenças significativas entre as médias de múltiplos grupos. Ela assume que os dados provêm de populações normalmente distribuídas com variâncias iguais. Se o valor de F calculado for maior que o valor crítico da distribuição F, rejeita-se a hipótese nula de que todas as médias dos grupos são iguais, indicando que existe uma diferença significativa entre pelo menos um par de médias dos grupos.',
        email: 'A ANOVA é amplamente utilizada em diversas áreas, como biologia, psicologia e economia, para testar diferenças entre grupos experimentais ou condições de tratamento.'
    }
];

const jobCache = {};

const jobListingsContainer = document.querySelector('.job-listings');

function generateJobListingsWithPhoneAndEmail(entries) {
    entries.forEach(entry => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('job');
        jobListing.id = entry.id;

        jobListing.innerHTML = `
        <h3 style="margin-bottom: 0.5em;">${entry.title}</h3>
        <h5 style="margin-bottom: 0.5em;">${entry.universe}</h5>
        <p style="margin-bottom: 0.5em;">${entry.theorem}</p>
        <p style="margin-bottom: 0.5em;">${entry.description}</p>
            ${entry.phone ? `<div class="phone" style="display: none;"><input type="text" id="phoneInput" value="${entry.phone}" readonly></div>` : ''}
            ${entry.email ? `<div class="email" style="display: none;"><input type="text" id="emailInput" value="${entry.email}" readonly></div>` : ''}
            <div class="tooltip" style="display: none;">copied!</div>
            <div class="timer" data-data-inicio="${entry.startDate}" data-data-fim="${entry.endDate}"></div>
            <div class="expired-message" style="display: none;">Anúncio Expirado</div>
        `;

        const phoneInput = jobListing.querySelector('#phoneInput');
        if (phoneInput) {
            phoneInput.addEventListener('click', () => openWhatsApp(phoneInput.value));
        }

        const emailInput = jobListing.querySelector('.email input');
        if (emailInput) {
            emailInput.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(emailInput.value);
                    const tooltip = jobListing.querySelector('.tooltip');
                    tooltip.style.display = 'block';
                    setTimeout(() => tooltip.style.display = 'none', 3000);
                } catch (err) {
                    console.error('Falha ao copiar o texto: ', err);
                }
            });
        }

        jobListing.timerInterval = setInterval(() => updateTimer(entry.id, entry.startDate, entry.endDate), 1000);

        jobListingsContainer.appendChild(jobListing);
    });
}

function exibirEmail(jobId) {
    const job = document.getElementById(jobId);
    const emailDiv = job.querySelector('.email');
    emailDiv.style.display = emailDiv.style.display === "block" ? "none" : "block";
}

function exibirWhatsApp(jobId) {
    const job = document.getElementById(jobId);
    const phoneDiv = job.querySelector('.phone');
    phoneDiv.style.display = phoneDiv.style.display === 'none' ? 'block' : 'none';
}

function openWhatsApp(phoneNumber) {
    window.open('https://wa.me/' + phoneNumber, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    generateJobListingsWithPhoneAndEmail(entries);
});
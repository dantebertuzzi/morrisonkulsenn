// entries.js
const entries = [
    {
        id: 'theorem1',
        title: 'Bayes\' Theorem',
        universe: 'Probability',
        theorem: "$$P(A|B)= \\frac{P(B|A) \\cdot P(A)}{P(B)}$$",
        description: 'The probability of an event A given that event B has occurred is calculated from the probability of B given A, the probability of A, and the probability of B.',
        email: '$$P(A)=\\frac{n(A)}{n(\\Omega)}$$',
    },
    {
        id: 'theorem2',
        title: 'Law of Total Probability',
        universe: 'Probability',
        theorem: "$$P(A)= \\sum_{i} P(A|B_i) \\cdot P(B_i)$$",
        description: 'The probability of an event A is the sum of the conditional probabilities of A given each event B_i, weighted by the probability of each B_i.',
        email: '$$P(A|B)=\\frac{P(A \\cap B)}{P(B)}$$',
    },
    {
        id: 'theorem3',
        title: 'Central Limit Theorem',
        universe: 'Statistics',
        theorem: "If \\(X_1, X_2, ..., X_n\\) are i.i.d. with mean \\(\\mu\\) and variance \\(\\sigma^2\\), then as \\(n\\) approaches infinity, the distribution of the sample mean approaches a normal distribution.",
        description: 'The Central Limit Theorem states that the distribution of the sample mean will approach a normal distribution as the sample size becomes large, regardless of the original distribution of the population.',
        email: '$$\\bar{X}=\\frac{1}{n}\\sum_{i=1}^n X_i$$',
    },
    {
        id: 'theorem4',
        title: 'Law of Large Numbers',
        universe: 'Statistics',
        theorem: "As \\(n\\) approaches infinity, the sample average \\(\\bar{X}\\) will converge to the expected value \\(\\mu\\) of the random variable.",
        description: 'The Law of Large Numbers states that as the number of trials or observations increases, the sample mean will converge to the expected value of the random variable.',
        email: '$$E[X]=\\mu$$',
    },
    {
        id: 'theorem5',
        title: 'Chebyshev\'s Inequality',
        universe: 'Probability',
        theorem: "$$P(|X - \\mu| \\geq k \\sigma) \\leq \\frac{1}{k^2}$$",
        description: 'Chebyshev\'s Inequality provides a bound on the probability that a random variable deviates from its mean by more than a certain number of standard deviations.',
        email: '$$P(|X-\\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$',
    },
    {
        id: 'theorem6',
        title: 'Bernoulli Distribution',
        universe: 'Probability',
        theorem: "$$P(X = 1) = p, \\quad P(X = 0) = 1 - p$$",
        description: 'The Bernoulli distribution represents a random variable which has exactly two possible outcomes: 1 (success) with probability p and 0 (failure) with probability 1 - p.',
        email: '$$E(X) = p, \\quad Var(X) = p(1 - p)$$',
    },
    {
        id: 'theorem7',
        title: 'Binomial Distribution',
        universe: 'Probability',
        theorem: "$$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$$",
        description: 'The Binomial distribution represents the number of successes in n independent Bernoulli trials with success probability p.',
        email: '$$E[X] = np$$, $$Var(X) = np(1 - p)$$',
    },
    {
        id: 'theorem8',
        title: 'Poisson Distribution',
        universe: 'Probability',
        theorem: "$$P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$$",
        description: 'The Poisson distribution represents the probability of a given number of events occurring in a fixed interval of time or space, given a known average rate of occurrence.',
        email: '$$E[X] = \\lambda$$, $$Var(X) = \\lambda$$',
    },
    {
        id: 'theorem9',
        title: 'Exponential Distribution',
        universe: 'Probability',
        theorem: "$$f(x; \\lambda) = \\lambda e^{-\\lambda x}$$",
        description: 'The Exponential distribution represents the time between events in a Poisson process, with rate parameter \\(\\lambda\\).',
        email: '$$E[X] = \\frac{1}{\\lambda}$$, $$Var(X) = \\frac{1}{\\lambda^2}$$',
    },
    {
        id: 'theorem10',
        title: 'Normal Distribution',
        universe: 'Probability',
        theorem: "$$f(x; \\mu, \\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}$$",
        description: 'The Normal distribution, or Gaussian distribution, is a continuous probability distribution characterized by its mean \\(\\mu\\) and variance \\(\\sigma^2\\).',
        email: '$$E[X] = \\mu$$, $$Var(X) = \\sigma^2$$',
    },
    {
        id: 'theorem11',
        title: 'Covariance',
        universe: 'Statistics',
        theorem: "$$Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$$",
        description: 'Covariance measures the degree to which two random variables vary together. It indicates the direction of the linear relationship between the variables.',
        email: '$$Cov(X, Y) = E[XY] - E[X]E[Y]$$',
    },
    {
        id: 'theorem12',
        title: 'Correlation Coefficient',
        universe: 'Statistics',
        theorem: "$$\\rho_{X,Y} = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y}$$",
        description: 'The correlation coefficient measures the strength and direction of the linear relationship between two random variables, ranging from -1 to 1.',
        email: '$$E[X] = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y}$$',
    },
    {
        id: 'theorem13',
        title: 'Student\'s t-Distribution',
        universe: 'Statistics',
        theorem: "$$f(t; \\nu) = \\frac{\\Gamma\\left(\\frac{\\nu + 1}{2}\\right)}{\\sqrt{\\nu \\pi} \\Gamma\\left(\\frac{\\nu}{2}\\right)} \\left(1 + \\frac{t^2}{\\nu}\\right)^{-\\frac{\\nu + 1}{2}}$$",
        description: 'The Student\'s t-distribution is used in hypothesis testing and confidence intervals for small sample sizes, characterized by its degrees of freedom \\(\\nu\\).',
        email: '$$t = \\frac{\\bar{X} - \\mu}{s / \\sqrt{n}}$$',
    },
    {
        id: 'theorem14',
        title: 'Chi-Squared Distribution',
        universe: 'Statistics',
        theorem: "$$f(x; \\nu) = \\frac{1}{2^{\\nu / 2} \\Gamma(\\nu / 2)} x^{\\frac{\\nu}{2} - 1} e^{-x / 2}$$",
        description: 'The Chi-Squared distribution is used in hypothesis testing, especially for tests of independence and goodness of fit, characterized by its degrees of freedom \\(\\nu\\).',
        email: '$$E[X] = \\nu$$, $$Var(X) = 2\\nu$$',
    },
    {
        id: 'theorem15',
        title: 'F-Distribution',
        universe: 'Statistics',
        theorem: "$$f(x; \\nu_1, \\nu_2) = \\frac{\\left(\\frac{\\nu_1}{\\nu_2}\\right)^{\\frac{\\nu_1}{2}} x^{\\frac{\\nu_1}{2} - 1}}{\\left(1 + \\frac{\\nu_1 x}{\\nu_2}\\right)^{\\frac{\\nu_1 + \\nu_2}{2}}}$$",
        description: 'The F-distribution is used in analysis of variance (ANOVA) and regression analysis, characterized by its two degrees of freedom parameters \\(\\nu_1\\) and \\(\\nu_2\\).',
        email: '$$E[X] = \\frac{\\nu_2}{\\nu_2 - 2}$$, $$Var(X) = \\frac{2 \\nu_2^2 (\\nu_1 + \\nu_1 - 2)}{\\nu_1 (\\nu_2 - 2)^2 (\\nu_2 - 4)}$$',
    },
    {
        id: 'theorem16',
        title: 'Markov\'s Inequality',
        universe: 'Probability',
        theorem: "$$P(X \\geq a) \\leq \\frac{E[X]}{a}$$",
        description: 'Markov\'s Inequality provides an upper bound on the probability that a non-negative random variable exceeds a certain value.',
        email: '$$P(X \\geq a) \\leq \\frac{E[X]}{a}$$',
    },
    {
        id: 'theorem17',
        title: 'Fisher-Snedecor F Distribution',
        universe: 'Statistics',
        theorem: 'The Fisher-Snedecor F distribution is used to test the ratio of two variances from normal populations. It is defined as the ratio between two independent sample variances, each divided by their respective degrees of freedom. For example, if we have two independent samples with variances \( S_1^2 \) and \( S_2^2 \) and degrees of freedom \( d_1 \) and \( d_2 \), the F statistic is given by: $$ F = \\frac{S_1^2/d_1}{S_2^2/d_2}. $$',
        description: 'The F distribution is asymmetric and depends on the degrees of freedom of the samples. It is commonly used in hypothesis testing, such as in ANOVA (Analysis of Variance), to compare variances across groups. The larger the F value, the stronger the evidence that the variances are different.',
        email: 'The F distribution is crucial in hypothesis tests for assessing the equality of variances and is widely used in regression analysis and ANOVA.'
    },    
    {
        id: 'theorem18',
        title: 'Convergence in Probability',
        universe: 'Probability',
        theorem: "$$X_n \\xrightarrow{P} X$$ if for every \\(\\epsilon > 0\\), $$P(|X_n - X| \\geq \\epsilon) \\to 0$$ as \\(n \\to \\infty$$",
        description: 'A sequence of random variables \\(X_n\\) converges in probability to a random variable \\(X\\) if the probability that \\(X_n\\) deviates from \\(X\\) by any positive amount goes to zero as \\(n\\) goes to infinity.',
        email: '$$X_n \\xrightarrow{P} X$$',
    },
    {
        id: 'theorem19',
        title: 'Law of Iterated Expectation',
        universe: 'Statistics',
        theorem: "$$E[E[X|Y]] = E[X]$$",
        description: 'The Law of Iterated Expectation states that the expected value of the conditional expectation of \\(X\\) given \\(Y\\) is equal to the expected value of \\(X\\).',
        email: '$$E[X] = E[E[X|Y]]$$',
    },
    {
        id: 'theorem20',
        title: 'Jensen\'s Inequality',
        universe: 'Statistics',
        theorem: "$$E[f(X)] \\geq f(E[X])$$ if \\(f\\) is convex",
        description: 'Jensen\'s Inequality provides a relationship between the expected value of a convex function of a random variable and the function of the expected value of that random variable.',
        email: '$$E[f(X)] \\geq f(E[X])$$',
    },
    {
        id: 'theorem21',
        title: 'Additive Property of Expectation',
        universe: 'Statistics',
        theorem: "$$E[X + Y] = E[X] + E[Y]$$",
        description: 'The Additive Property of Expectation states that the expected value of the sum of two random variables is equal to the sum of their expected values, regardless of their dependence.',
        email: '$$E[X + Y] = E[X] + E[Y]$$',
    },
    {
        id: 'theorem22',
        title: 'Variance of Sum of Random Variables',
        universe: 'Statistics',
        theorem: "$$Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y)$$",
        description: 'The variance of the sum of two random variables is equal to the sum of their variances plus twice their covariance.',
        email: '$$Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y)$$',
    },
    {
        id: 'theorem23',
        title: 'Conditional Expectation',
        universe: 'Statistics',
        theorem: "$$E[X|Y]$$",
        description: 'The conditional expectation of a random variable X given another random variable Y is the expected value of X when Y is known.',
        email: '$$E[X|Y]$$',
    },
    {
        id: 'theorem24',
        title: 'Probability Generating Function',
        universe: 'Probability',
        theorem: "$$G_X(s) = E[s^X]$$",
        description: 'The probability generating function is used to encapsulate the distribution of a discrete random variable and helps to find moments and probabilities.',
        email: '$$G_X(s) = E[s^X]$$',
    },
    {
        id: 'theorem25',
        title: 'Moment Generating Function',
        universe: 'Probability',
        theorem: "$$M_X(t) = E[e^{tX}]$$",
        description: 'The moment generating function is used to find the moments of a random variable and can help to identify the distribution of a random variable.',
        email: '$$M_X(t) = E[e^{tX}]$$',
    },
    {
        id: 'theorem26',
        title: 'Combination Formula',
        universe: 'Combinatorics',
        theorem: "$$C(n, r) = \\frac{n!}{r! \\cdot (n-r)!}$$",
        description: 'The number of ways to choose r elements from a set of n elements without regard to the order of selection.',
        email: '$$n! = n \\times (n-1) \\times \\cdots \\times 1$$',
    },
    {
        id: 'theorem27',
        title: 'Permutation Formula',
        universe: 'Combinatorics',
        theorem: "$$P(n, r) = \\frac{n!}{(n-r)!}$$",
        description: 'The number of ways to arrange r elements from a set of n elements where the order of selection matters.',
        email: '$$n! = n \\times (n-1) \\times \\cdots \\times 1$$',
    }, 
    {
        id: 'theorem28',
        title: 'Binomial Theorem',
        universe: 'Combinatorics',
        theorem: "$$(x + y)^n = \\sum_{k=0}^{n} C(n, k) \\cdot x^{n-k} \\cdot y^k$$",
        description: 'Expands a binomial raised to a power into a sum involving binomial coefficients.',
        email: '$$C(n, k) = \\frac{n!}{k! \\cdot (n-k)!}$$',
    },
    {
        id: 'theorem29',
        title: 'Multinomial Coefficient',
        universe: 'Combinatorics',
        theorem: "$$\\frac{n!}{n_1! \\cdot n_2! \\cdot \\cdots \\cdot n_r!}$$",
        description: 'The number of ways to partition a set of n elements into r groups of sizes \( n_1, n_2, \\ldots, n_r \).',
        email: '$$n_1 + n_2 + \\cdots + n_r = n$$',
    },
    {
        id: 'theorem30',
        title: 'Stirling\'s Approximation',
        universe: 'Combinatorics',
        theorem: "$$n! \\approx \\sqrt{2 \\pi n} \\left( \\frac{n}{e} \\right)^n$$",
        description: 'An approximation for factorials, useful for large values of n.',
        email: 'Approximation used for simplifying complex factorial expressions in combinatorial problems.',
    },
    {
        id: 'theorem31',
        title: 'Pigeonhole Principle',
        universe: 'Combinatorics',
        theorem: 'If more than n items are put into n containers, then at least one container must contain more than one item.',
        description: 'A basic principle used to prove the existence of certain conditions in combinatorial problems.',
        email: 'Useful in proving the existence of repeated elements under certain conditions.',
    },
    {
        id: 'theorem32',
        title: 'Inclusion-Exclusion Principle',
        universe: 'Combinatorics',
        theorem: "$$|A \\cup B| = |A| + |B| - |A \\cap B|$$",
        description: 'Calculates the cardinality of the union of sets by summing the sizes of the individual sets and subtracting the size of their intersection.',
        email: 'Can be generalized to more than two sets.',
    },
    {
        id: 'theorem33',
        title: 'Catalan Number',
        universe: 'Combinatorics',
        theorem: "$$C_n = \\frac{1}{n+1} \\binom{2n}{n}$$",
        description: 'Counts the number of ways to correctly match parentheses, the number of rooted binary trees with n+1 leaves, and many other combinatorial structures.',
        email: '$$\\binom{2n}{n} = \\frac{(2n)!}{n! \\cdot n!}$$',
    },
    {
        id: 'theorem34',
        title: 'Multinomial Distribution',
        universe: 'Probability',
        theorem: "$$P(X_1 = x_1, \\dots, X_k = x_k) = \\frac{n!}{x_1! \\cdot x_2! \\cdot \\dots \\cdot x_k!} p_1^{x_1} p_2^{x_2} \\dots p_k^{x_k}$$",
        description: 'The probability of obtaining a specific combination of outcomes in n independent trials, where each trial can result in one of k possible outcomes with fixed probabilities.',
        email: '$$x_1 + x_2 + \\dots + x_k = n$$',
    },
    {
        id: 'theorem35',
        title: 'Hypergeometric Distribution',
        universe: 'Probability',
        theorem: "$$P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}$$",
        description: 'The probability of k successes in n draws from a finite population of size N containing exactly K successes, without replacement.',
        email: '$$\\binom{n}{k} = \\frac{n!}{k! (n-k)!}$$',
    },  
    {
        id: 'theorem36',
        title: 'Probability of All Permutations',
        universe: 'Probability',
        theorem: "$$P = \\frac{1}{n!}$$",
        description: 'The probability of any particular arrangement (permutation) of n distinct elements when all permutations are equally likely.',
        email: 'Each permutation is equally likely out of the total of n! permutations.',
    },  
    {
        id: 'theorem37',
        title: 'Geometric Distribution',
        universe: 'Probability',
        theorem: "$$P(X = k) = (1 - p)^{k-1} p$$",
        description: 'The probability that the first success occurs on the k-th trial in a sequence of independent Bernoulli trials with probability of success p.',
        email: 'Models the number of failures before the first success.',
    },
    {
        id: 'theorem38',
        title: 'Negative Binomial Distribution',
        universe: 'Probability',
        theorem: "$$P(X = k) = \\binom{k + r - 1}{k} p^r (1 - p)^k$$",
        description: 'The probability of having k failures before achieving the r-th success in a sequence of independent Bernoulli trials with probability of success p.',
        email: '$$\\binom{k + r - 1}{k} = \\frac{(k + r - 1)!}{k! (r - 1)!}$$',
    },
    {
        id: 'theorem39',
        title: 'Pascal\'s Triangle',
        universe: 'Combinatorics',
        theorem: "$$\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$$",
        description: 'Pascal\'s Triangle is a triangular array of binomial coefficients. Each number is the sum of the two directly above it. The n-th row corresponds to the coefficients of the binomial expansion \\((a + b)^n\\).',
        email: 'Useful for finding combinations, binomial expansions, and properties related to binomial coefficients.',
    },
    {
        id: 'theorem40',
        title: 'Variance',
        universe: 'Statistics',
        theorem: "$$Var(X) = E[(X - E(X))^2]$$",
        description: 'Variance measures how much the values of a random variable differ from the mean of the distribution. It is the expected value of the squared deviations from the mean.',
        email: '$$Var(X) = \\sigma^2$$',
    },
    {
        id: 'theorem41',
        title: 'Conditional Probability',
        universe: 'Probability',
        theorem: "$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$",
        description: 'The probability of event A occurring given that event B has occurred, calculated using the joint probability of A and B divided by the probability of B.',
        email: '$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$',
    },
    {
        id: 'theorem42',
        title: 'Confidence Interval for the Mean',
        universe: 'Statistics',
        theorem: "$$\\bar{X} \\pm z \\frac{\\sigma}{\\sqrt{n}}$$",
        description: 'The confidence interval for the mean estimates the range in which the population mean is likely to fall, based on the sample mean, standard deviation, and the z-value corresponding to the desired confidence level.',
        email: '$$CI = [\\bar{X} - ME, \\bar{X} + ME], \\quad ME = z \\frac{\\sigma}{\\sqrt{n}}$$',
    },
    {
        id: 'theorem43',
        title: 'Uniform Distribution',
        universe: 'Probability',
        theorem: "$$f(x) = \\frac{1}{b - a}, \\quad a \\leq x \\leq b$$",
        description: 'The uniform distribution is a continuous probability distribution where all intervals of the same length within the distribution\'s range are equally probable.',
        email: '$$E(X) = \\frac{a + b}{2}, \\quad Var(X) = \\frac{(b - a)^2}{12}$$',
    },
    {
        id: 'theorem44',
        title: 'Joint Probability',
        universe: 'Probability',
        theorem: "$$P(A \\cap B) = P(A|B) \\cdot P(B)$$",
        description: 'The joint probability of two events A and B is the probability that both events occur simultaneously. It can be found by multiplying the probability of A given B by the probability of B.',
        email: '$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$',
    },
    {
        id: 'theorem45',
        title: 'Expected Value of a Discrete Random Variable',
        universe: 'Statistics',
        theorem: "$$E(X) = \\sum_{i=1}^{n} x_i P(X = x_i)$$",
        description: 'The expected value (mean) of a discrete random variable is the sum of all possible values of the variable, each multiplied by their corresponding probability.',
        email: '$$E(aX + b) = aE(X) + b$$',
    },
    {
        id: 'theorem46',
        title: 'Cauchy-Schwarz Inequality',
        universe: 'Statistics',
        theorem: "$$(E[XY])^2 \\leq E[X^2]E[Y^2]$$",
        description: 'The Cauchy-Schwarz inequality in probability and statistics states that the square of the expectation of the product of two random variables is less than or equal to the product of their variances.',
        email: '$$|Cov(X, Y)| \\leq \\sigma_X \\sigma_Y$$',
    },
    {
        id: 'theorem47',
        title: 'Probability Density Function (PDF)',
        universe: 'Probability',
        theorem: "$$P(a \\leq X \\leq b) = \\int_{a}^{b} f(x) \\, dx$$",
        description: 'A probability density function (PDF) represents the likelihood of a continuous random variable to take on a specific value. The area under the curve of the PDF over an interval gives the probability that the variable falls within that interval.',
        email: '$$f(x) \\geq 0, \\quad \\int_{-\\infty}^{\\infty} f(x) \\, dx = 1$$',
    },
    {
        id: 'theorem48',
        title: 'Cumulative Distribution Function (CDF)',
        universe: 'Probability',
        theorem: "$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t) \\, dt$$",
        description: 'The cumulative distribution function (CDF) of a random variable X gives the probability that X will take a value less than or equal to x. It is the integral of the probability density function (PDF).',
        email: '$$0 \\leq F(x) \\leq 1, \\quad \\lim_{x \\to -\\infty} F(x) = 0, \\quad \\lim_{x \\to \\infty} F(x) = 1$$',
    },
    {
        id: 'theorem49',
        title: 'Sample Variance',
        universe: 'Statistics',
        theorem: "$$s^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$$",
        description: 'Sample variance is a measure of the dispersion of sample data points. It is calculated by averaging the squared deviations of each sample point from the sample mean.',
        email: '$$s = \\sqrt{s^2}$$',
    },
    {
        id: 'theorem50',
        title: 'Monte Carlo Method',
        universe: 'Probability & Statistics',
        theorem: 'Estimate $$E[f(X)] \\approx \\frac{1}{N} \\sum_{i=1}^{N} f(X_i), \\quad X_i \\sim p(X)$$',
        description: 'The Monte Carlo method is a computational algorithm that relies on repeated random sampling to obtain numerical results. It is used to estimate mathematical functions or simulate the behavior of complex systems.',
        email: 'For integration, $$\\int_{a}^{b} f(x) dx \\approx \\frac{b-a}{N} \\sum_{i=1}^{N} f(X_i), \\quad X_i \\sim U(a, b)$$',
    },
    {
        id: 'theorem51',
        title: 'Likelihood Ratio Test',
        universe: 'Statistics',
        theorem: "$$\\Lambda = \\frac{L(\\theta_0)}{L(\\hat{\\theta})}$$",
        description: 'The likelihood ratio test is a statistical test for comparing the fit of two models: a null model (with parameter \\(\\theta_0\\)) and an alternative model (with parameter \\(\\hat{\\theta}\\)). It tests the null hypothesis that the simpler model is sufficient.',
        email: 'Used to derive test statistics in hypothesis testing.',
    },
    {
        id: 'theorem52',
        title: 'WLLN (Weak Law of Large Numbers)',
        universe: 'Probability',
        theorem: "$$P \\left( \\left| \\bar{X}_n - \\mu \\right| \\geq \\epsilon \\right) \\to 0 \\text{ as } n \\to \\infty$$",
        description: 'The Weak Law of Large Numbers states that the sample mean \\(\\bar{X}_n\\) converges in probability to the population mean \\(\\mu\\) as the sample size \\(n\\) increases.',
        email: 'Convergence in probability, not almost surely.',
    },
    {
        id: 'theorem53',
        title: 'Bootstrap Method',
        universe: 'Statistics',
        theorem: 'Approximate $$\\hat{\\theta} = \\frac{1}{B} \\sum_{i=1}^{B} \\hat{\\theta}^*_i$$ by resampling.',
        description: 'The Bootstrap Method is a resampling technique used to estimate statistics on a population by sampling a dataset with replacement. It allows for the estimation of the sampling distribution of almost any statistic.',
        email: 'Useful for estimating the variance, bias, and constructing confidence intervals.',
    },
    {
        id: 'theorem54',
        title: 'Fisher Information',
        universe: 'Statistics',
        theorem: "$$I(\\theta) = -E \\left[ \\frac{\\partial^2}{\\partial \\theta^2} \\log L(\\theta; X) \\right]$$",
        description: 'Fisher Information measures the amount of information that an observable random variable carries about an unknown parameter upon which the probability of the random variable depends. It plays a central role in parameter estimation.',
        email: 'The inverse of Fisher Information gives the Cramér-Rao lower bound.',
    },
    {
        id: 'theorem55',
        title: 'Baye’s Rule (Extended)',
        universe: 'Probability',
        theorem: "$$P(A_i|B) = \\frac{P(B|A_i) P(A_i)}{\\sum_{j=1}^{n} P(B|A_j) P(A_j)}$$",
        description: 'An extension of Bayes\' theorem that accounts for multiple events \\(A_1, A_2, ..., A_n\\) partitioning the sample space. It is often used in the context of Bayesian inference.',
        email: 'The denominator is the Law of Total Probability.',
    },
    {
        id: 'theorem56',
        title: 'Maximum Likelihood Estimation (MLE)',
        universe: 'Statistics',
        theorem: "Find \\(\\hat{\\theta}\\) that maximizes the likelihood: $$L(\\theta; x_1, x_2, ..., x_n) = \\prod_{i=1}^n f(x_i | \\theta)$$",
        description: 'MLE is a method for estimating the parameters of a statistical model. It finds the parameter values that maximize the likelihood function, which measures how likely the observed data is given the parameters.',
        email: 'Often requires numerical methods to solve in complex models.',
    },
    {
        id: 'theorem57',
        title: 'Cramer’s V',
        universe: 'Statistics',
        theorem: "$$V = \\sqrt{\\frac{\\chi^2}{n \\cdot min(r - 1, c - 1)}}$$",
        description: 'Cramer’s V is a measure of association between two nominal variables, providing a value between 0 (no association) and 1 (perfect association). It is based on the chi-square statistic.',
        email: 'Cramer’s V is useful for contingency tables of any size.',
    },
    {
        id: 'theorem58',
        title: 'Kullback-Leibler Divergence',
        universe: 'Probability & Information Theory',
        theorem: "$$D_{KL}(P || Q) = \\sum_{x} P(x) \\log \\frac{P(x)}{Q(x)}$$",
        description: 'Kullback-Leibler divergence measures the difference between two probability distributions. It quantifies how much information is lost when approximating one distribution with another.',
        email: 'Non-symmetric; used in machine learning and statistics.',
    },
    {
        id: 'theorem59',
        title: 'Total Variation Distance',
        universe: 'Probability',
        theorem: "$$d_{TV}(P, Q) = \\frac{1}{2} \\sum_{x} |P(x) - Q(x)|$$",
        description: 'The Total Variation Distance between two probability distributions is a measure of the largest difference between the probabilities assigned by the two distributions over all possible events.',
        email: 'Ranges from 0 (identical distributions) to 1 (completely different).',
    },
    {
        id: 'theorem60',
        title: 'Spearman’s Rank Correlation Coefficient',
        universe: 'Statistics',
        theorem: "$$\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$$",
        description: 'Spearman’s rank correlation measures the strength and direction of the association between two ranked variables. It is a nonparametric measure that assesses how well the relationship between two variables can be described using a monotonic function.',
        email: 'Values range from -1 (perfect negative correlation) to +1 (perfect positive correlation).',
    },
    {
        id: 'theorem61',
        title: 'P-Value',
        universe: 'Statistics',
        theorem: "The p-value is: $$P(\\text{Test Statistic} \\geq \\text{Observed Value} | H_0)$$",
        description: 'The p-value measures the probability of obtaining a test statistic at least as extreme as the one observed, assuming the null hypothesis is true. It is used to assess the strength of evidence against the null hypothesis.',
        email: 'A small p-value (typically ≤ 0.05) indicates strong evidence against the null hypothesis.',
    },
    {
        id: 'theorem62',
        title: 'Kolmogorov-Smirnov Test',
        universe: 'Statistics',
        theorem: "$$D_n = \\sup_x |F_n(x) - F(x)|$$",
        description: 'The Kolmogorov-Smirnov test is a nonparametric test that compares the empirical distribution function of a sample with a reference probability distribution (or compares two empirical distributions) to determine if they differ significantly.',
        email: 'Used for testing goodness-of-fit and comparing distributions.',
    },
    {
        id: 'theorem63',
        title: 'Gauss-Markov Theorem',
        universe: 'Statistics',
        theorem: 'In a linear regression model, the ordinary least squares (OLS) estimator is the best linear unbiased estimator (BLUE) of the coefficients.',
        description: 'The Gauss-Markov theorem states that, under certain conditions (e.g., linearity, homoscedasticity, and independence of errors), the OLS estimator has the smallest variance among all linear unbiased estimators.',
        email: 'Assumes that errors have zero mean and constant variance.',
    },
    {
        id: 'theorem64',
        title: 'Neyman-Pearson Lemma',
        universe: 'Statistics',
        theorem: 'The most powerful test for a simple null hypothesis against a simple alternative hypothesis maximizes the likelihood ratio: $$\\frac{f(x; \\theta_1)}{f(x; \\theta_0)} \\geq k$$.',
        description: 'The Neyman-Pearson Lemma provides a framework for constructing the most powerful statistical test for a given size when testing between two simple hypotheses.',
        email: 'Used as the foundation for likelihood ratio tests.',
    },
    {
        id: 'theorem65',
        title: 'Wald Test',
        universe: 'Statistics',
        theorem: "$$W = \\frac{(\\hat{\\theta} - \\theta_0)^2}{\\text{Var}(\\hat{\\theta})}$$",
        description: 'The Wald test assesses the significance of individual coefficients in statistical models. It compares the estimated parameter to a hypothesized value, adjusting for the standard error.',
        email: 'Commonly used in regression analysis and generalized linear models.',
    },
    {
        id: 'theorem66',
        title: 'Shapiro-Wilk Test',
        universe: 'Statistics',
        theorem: 'The Shapiro-Wilk test statistic is given by: $$W = \\frac{(\\sum_{i=1}^{n} a_i X_{(i)})^2}{\\sum_{i=1}^{n} (X_i - \\bar{X})^2},$$ where \\(X_{(i)}\\) are the ordered sample values, \\(a_i\\) are constants derived from the covariance matrix of the order statistics of a normal distribution, and \\(\\bar{X}\\) is the sample mean.',
        description: 'The Shapiro-Wilk test assesses the normality of a data sample. It tests the null hypothesis that the sample comes from a normally distributed population. A small p-value (typically ≤ 0.05) indicates that the null hypothesis can be rejected, suggesting the data is not normally distributed.',
        email: 'The Shapiro-Wilk test is more powerful for small sample sizes compared to other normality tests.',
    },
    {
        id: 'theorem67',
        title: 'Expected Value of a Continuous Random Variable',
        universe: 'Statistics',
        theorem: 'For a continuous random variable \\(X\\) with probability density function (PDF) \\(f(x)\\): $$E(X) = \\int_{-\\infty}^{\infty} x f(x) \\, dx.$$',
        description: 'The expected value (or mean) of a continuous random variable represents the center of its probability distribution. It is the weighted average of all possible values, with weights given by their probability density.',
        email: 'The expected value is a fundamental concept in probability, often used to summarize the central tendency of a random variable\'s distribution.',
    },
    {
        id: 'theorem68',
        title: 'Sample Space',
        universe: 'Probability',
        theorem: 'The sample space \\(\\Omega\\) is the set of all possible outcomes of a random experiment. For example, in a single roll of a fair six-sided die, the sample space is \\(\\Omega = \\{1, 2, 3, 4, 5, 6\\}\\).',
        description: 'The sample space is a fundamental concept in probability theory, representing the complete set of outcomes that can occur in a random experiment. Each outcome in the sample space is mutually exclusive, and the sum of the probabilities of all outcomes is 1.',
        email: 'The sample space can be finite or infinite, depending on the nature of the random experiment.',
    },
    {
        id: 'theorem69',
        title: 'Event',
        universe: 'Probability',
        theorem: 'An event \\(E\\) is a subset of the sample space \\(\\Omega\\). It consists of one or more outcomes of a random experiment. For example, if \\(\\Omega = \\{1, 2, 3, 4, 5, 6\\}\\) is the sample space for a roll of a fair six-sided die, then the event \\(E = \\{2, 4, 6\\}\\) represents rolling an even number.',
        description: 'In probability theory, an event is a set of outcomes of a random experiment. Events can be simple (consisting of a single outcome) or compound (consisting of multiple outcomes). The probability of an event is the measure of the likelihood that the event will occur, calculated as \\(P(E)\\).',
        email: 'Events are often classified as mutually exclusive, independent, or complementary based on their relationships with other events.',
    },
    {
        id: 'theorem70',
        title: 'Probability Axiom 1: Non-negativity',
        universe: 'Probability',
        theorem: 'For any event \\(E\\), \\(P(E) \\geq 0\\).',
        description: 'The probability of any event is always non-negative. This axiom ensures that probabilities are always greater than or equal to zero, reflecting the fact that probabilities cannot be negative.',
        email: 'Non-negativity is a fundamental property that must hold for any valid probability measure.',
    },
    {
        id: 'theorem71',
        title: 'Probability Axiom 2: Normalization',
        universe: 'Probability',
        theorem: 'The probability of the sample space \\(\\Omega\\) is 1: $$P(\\Omega) = 1.$$',
        description: 'This axiom states that the probability of the sample space, which includes all possible outcomes of a random experiment, is equal to 1. It reflects the certainty that one of the outcomes in the sample space will occur.',
        email: 'Normalization ensures that the total probability across all possible outcomes is 1.',
    },
    {
        id: 'theorem72',
        title: 'Probability Axiom 3: Additivity',
        universe: 'Probability',
        theorem: 'For any two mutually exclusive (disjoint) events \\(E_1\\) and \\(E_2\\), the probability of their union is the sum of their probabilities: $$P(E_1 \\cup E_2) = P(E_1) + P(E_2).$$',
        description: 'If two events cannot both occur at the same time (i.e., they are mutually exclusive), then the probability of either event occurring is the sum of their individual probabilities.',
        email: 'Additivity is crucial for calculating probabilities of combined events, especially in complex scenarios involving multiple outcomes.',
    },
    {
        id: 'theorem73',
        title: 'Stochastic Process',
        universe: 'Probability',
        theorem: 'A stochastic process is a collection of random variables \\(\\{X(t) : t \\in T\\}\\) indexed by a parameter \\(t\\) from an index set \\(T\\). The process describes the evolution of a system over time or space.',
        description: 'A stochastic process is used to model systems that evolve in a probabilistic manner. Examples include stock prices, weather patterns, and queues in service systems. The index set \\(T\\) can represent time or another parameter, and each random variable \\(X(t)\\) represents the state of the system at a given index.',
        email: 'Stochastic processes are foundational in fields like finance, queueing theory, and statistical mechanics, where they are used to analyze and predict complex systems and phenomena.',
    },
    {
        id: 'theorem74',
        title: 'Pareto Distribution',
        universe: 'Probability',
        theorem: 'The probability density function (PDF) of the Pareto distribution is given by: $$f(x; \\alpha, x_m) = \\frac{\\alpha x_m^\\alpha}{x^{\\alpha+1}}, \\text{ for } x \\geq x_m,$$ where \\(\\alpha\\) is the shape parameter and \\(x_m\\) is the scale parameter.',
        description: 'The Pareto distribution is used to model distributions of wealth, income, and other quantities where a small proportion of the population holds most of the total quantity. It is characterized by its heavy tail, which means that extreme values are more likely than in a normal distribution.',
        email: 'The mean of the Pareto distribution exists only if \\(\\alpha > 1\\) and is given by: $$E(X) = \\frac{\\alpha x_m}{\\alpha - 1}, \\text{ for } \\alpha > 1.$$',
    },
    {
        id: 'theorem75',
        title: 'Linear Regression',
        universe: 'Statistics',
        theorem: 'In the linear regression model, the relationship between the dependent variable \\(Y\\) and the independent variable \\(X\\) is given by the equation: $$Y = \\beta_0 + \\beta_1 X + \\epsilon,$$ where \\(\\beta_0\\) is the intercept, \\(\\beta_1\\) is the coefficient of the independent variable, and \\(\\epsilon\\) represents the random error.',
        description: 'Linear regression is a statistical technique used to model the relationship between a dependent variable and one or more independent variables. The goal is to find the best-fitting line that minimizes the sum of the squared errors between the observed and predicted values.',
        email: 'The coefficients \\(\\beta\\) can be estimated using the least squares method.',
    },
    {
        id: 'theorem76',
        title: 'Logistic Regression',
        universe: 'Statistics',
        theorem: 'Logistic regression models the probability of a binary event \\(Y\\) as: $$P(Y = 1 | X) = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 X)}}.$$',
        description: 'Logistic regression is used to model the relationship between a categorical (usually binary) dependent variable and one or more independent variables. It estimates the probabilities of an event occurring, allowing the results to be interpreted in terms of odds.',
        email: 'The coefficients are estimated through the maximization of the likelihood function.',
    },
    {
        id: 'theorem77',
        title: 'Polynomial Regression',
        universe: 'Statistics',
        theorem: 'Polynomial regression is expressed as: $$Y = \\beta_0 + \\beta_1 X + \\beta_2 X^2 + ... + \\beta_n X^n + \\epsilon.$$',
        description: 'Polynomial regression is an extension of linear regression that allows modeling nonlinear relationships by including power terms of the independent variable. This is useful when the data shows curvature.',
        email: 'The coefficients are estimated using the least squares method, as in linear regression.',
    },
    {
        id: 'theorem78',
        title: 'Ridge Regression',
        universe: 'Statistics',
        theorem: 'Ridge regression modifies the cost function of linear regression by adding a penalty term: $$J(\\beta) = ||Y - X\\beta||^2 + \\lambda ||\\beta||^2,$$ where \\(\\lambda\\) is a regularization parameter.',
        description: 'Ridge regression is a technique used to handle multicollinearity among independent variables. The penalty helps reduce model complexity and prevent overfitting.',
        email: 'Choosing \\(\\lambda\\) appropriately is crucial for the model’s performance.',
    },
    {
        id: 'theorem79',
        title: 'Lasso Regression',
        universe: 'Statistics',
        theorem: 'Lasso regression modifies the cost function of linear regression with an L1 penalty: $$J(\\beta) = ||Y - X\\beta||^2 + \\lambda ||\\beta||_1,$$ where \\(\\lambda\\) is a regularization parameter.',
        description: 'Lasso regression is also used to prevent overfitting and can perform variable selection, as it can shrink irrelevant variable coefficients to zero, resulting in simpler models.',
        email: 'The choice of \\(\\lambda\\) is critical for balancing bias and variance.',
    },
    {
        id: 'theorem80',
        title: 'Elastic Net Regression',
        universe: 'Statistics',
        theorem: 'Elastic net regression combines L1 and L2 penalties in the cost function: $$J(\\beta) = ||Y - X\\beta||^2 + \\lambda_1 ||\\beta||_1 + \\lambda_2 ||\\beta||^2.$$',
        description: 'Elastic net regression is useful when there are many correlated variables, combining the advantages of both lasso and ridge regression. It performs variable selection and also controls model complexity.',
        email: 'Choosing the parameters \\(\\lambda_1\\) and \\(\\lambda_2\\) is important for the model’s tuning.',
    },
    {
        id: 'theorem81',
        title: 'Pearson Correlation Coefficient',
        universe: 'Statistics',
        theorem: 'The Pearson correlation measures the strength and direction of the linear association between two quantitative variables, defined by the formula: $$r = \\frac{\\sum{(x_i - \\bar{x})(y_i - \\bar{y})}}{\\sqrt{\\sum{(x_i - \\bar{x})^2} \\sum{(y_i - \\bar{y})^2}}}.$$',
        description: 'The Pearson correlation coefficient ranges from -1 to 1, where values close to 1 indicate a strong positive correlation, values close to -1 indicate a strong negative correlation, and values close to 0 indicate no linear correlation. It is used to determine the linear relationship between two variables, is sensitive to outliers, and assumes normality of the data.',
        email: 'The interpretation of the Pearson correlation coefficient is important for understanding the strength of the linear relationship between variables.'
    },
    {
        id: 'theorem82',
        title: 'Arithmetic Mean',
        universe: 'Statistics',
        theorem: 'The arithmetic mean is a measure of central tendency that calculates the average value of a dataset by summing all values and dividing by the total number of observations: $$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}.$$',
        description: 'The arithmetic mean is widely used to represent a typical value in a dataset. It is sensitive to extreme values (outliers) and is appropriate when the data is relatively symmetrically distributed.',
        email: 'The mean is one of the most commonly used measures of central tendency in statistics and is simple to calculate and interpret.'
    },
    {
        id: 'theorem83',
        title: 'Geometric Mean',
        universe: 'Statistics',
        theorem: 'The geometric mean is a measure of central tendency calculated as the nth root of the product of the values: $$\\bar{x}_{geom} = \\sqrt[n]{\\prod_{i=1}^{n} x_i}.$$',
        description: 'The geometric mean is useful in situations where the values are multiplicative, such as in calculating growth rates or percentage changes. It is less sensitive to extreme values compared to the arithmetic mean.',
        email: 'The geometric mean is recommended when working with data that varies by orders of magnitude or to calculate means of proportions.'
    },
    {
        id: 'theorem84',
        title: 'Harmonic Mean',
        universe: 'Statistics',
        theorem: 'The harmonic mean is the measure of central tendency calculated as the inverse of the mean of the inverses of the values: $$\\bar{x}_{harm} = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}}.$$',
        description: 'The harmonic mean is particularly useful for data involving rates or ratios, such as average speeds. It gives more weight to smaller values and less weight to larger values.',
        email: 'The harmonic mean is recommended for means of speeds or flows and when the data is distributed inversely.'
    },
    {
        id: 'theorem85',
        title: 'Weighted Mean',
        universe: 'Statistics',
        theorem: 'The weighted mean is calculated by assigning weights to each value, reflecting their relative importance: $$\\bar{x}_{pond} = \\frac{\\sum_{i=1}^{n} w_i x_i}{\\sum_{i=1}^{n} w_i}.$$',
        description: 'The weighted mean is useful when not all values are equally important. It allows for assigning weights to compute an average value that reflects this difference in importance.',
        email: 'The weighted mean is widely used in financial analyses, where different assets have different relevances, or in surveys, where responses may have different weights.'
    },
    {
        id: 'theorem86',
        title: 'Mode',
        universe: 'Statistics',
        theorem: 'The mode is the measure of central tendency that identifies the value or values that appear most frequently in a dataset. For example, in a dataset like [2, 3, 4, 4, 5], the mode is 4, as it is the value that repeats most often. Unlike the mean or median, the mode can be used for categorical data.',
        description: 'The mode is useful for qualitative and quantitative data, especially in skewed or multimodal distributions. A dataset can have a single mode (unimodal), more than one mode (bimodal or multimodal), or no mode at all.',
        email: 'The mode is a simple measure of central tendency, particularly useful for understanding the frequency of occurrences in categorical data distributions.'
    },
    {
        id: 'theorem87',
        title: 'Median',
        universe: 'Statistics',
        theorem: 'The median is the measure of central tendency that represents the central value of an ordered dataset. For example, in a dataset like [3, 5, 7], the median is 5, as it is the middle value. When the number of observations is even, such as in [3, 5, 7, 9], the median is the average of the two central values, which is (5 + 7) / 2 = 6.',
        description: 'The median is useful for describing skewed distributions, as it is less sensitive to extreme values (outliers) than the arithmetic mean. It divides the dataset into two halves: half of the values are less than or equal to the median, and half are greater than or equal to it.',
        email: 'The median is a robust measure of central tendency, often used when there are outliers or a skewed distribution in the data.'
    },
    {
        id: 'theorem88',
        title: 'Drake Equation',
        universe: 'Astrobiology',
        theorem: 'The Drake Equation is a probabilistic formula used to estimate the number of active, communicative extraterrestrial civilizations in the Milky Way galaxy. It is expressed as: $$ N = R_* \\times f_p \\times n_e \\times f_l \\times f_i \\times f_c \\times L $$',
        description: 'where: \n- \( N \) is the number of civilizations we might communicate with, \n- \( R_* \) is the rate of star formation, \n- \( f_p \) is the fraction of stars with planetary systems, \n- \( n_e \) is the number of planets per star that can support life, \n- \( f_l \) is the fraction of planets where life actually develops, \n- \( f_i \) is the fraction of planets with intelligent life, \n- \( f_c \) is the fraction of civilizations that develop technology to communicate, \n- \( L \) is the length of time these civilizations can communicate.',
        email: 'The Drake Equation is often used as a tool for stimulating scientific thought about the search for extraterrestrial intelligence (SETI) and understanding the factors necessary for life to evolve and persist in the universe.'
    },
    {
        "id": "theorem89",
        "title": "Cross-multiplication",
        "universe": "Mathematics",
        "theorem": "Cross-multiplication is a mathematical method used to solve proportion problems, allowing you to find an unknown value when there is a direct or inverse proportionality relationship between three known values. The basic formula is expressed as: $$ \\frac{a}{b} = \\frac{c}{x} $$, where \( x \) is the value we want to find.",
        "description": "where: \n- \( a \) and \( b \) are known values that have a direct or inverse relationship, \n- \( c \) is another known value that is related to \( x \), \n- \( x \) is the unknown value we want to discover.",
        "email": "The Cross-multiplication is widely used in everyday and scientific problems to calculate proportions, ranging from simple financial calculations to complex situations in physics and chemistry."
    },
    {
        id: 'theorem90',
        title: 'Analysis of Variance (ANOVA)',
        universe: 'Statistics',
        theorem: 'ANOVA, or Analysis of Variance, is a statistical method used to compare the means of three or more groups to determine if at least one of them is significantly different from the others. It is based on partitioning the total variability in the data into variability "between groups" and "within groups." The F statistic in ANOVA is calculated by dividing the mean square between groups by the mean square within groups. Mathematically, it is expressed as: $$ F = \\frac{MS_{between}}{MS_{within}} $$ where $$ MS_{between} = \\frac{SS_{between}}{df_{between}} $$ and $$ MS_{within} = \\frac{SS_{within}}{df_{within}} $$ with \( SS \) representing the sum of squares and \( df \) the degrees of freedom.',
        description: 'ANOVA is a fundamental technique in statistics, used to test for significant differences between the means of multiple groups. It assumes that the data come from normally distributed populations with equal variances. If the calculated F statistic is greater than the critical value from the F distribution, the null hypothesis that all group means are equal is rejected. This indicates that there is a significant difference between at least one pair of group means.',
        email: 'ANOVA is widely used in various fields, including biology, psychology, and economics, to test for differences between experimental groups or treatment conditions.'
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
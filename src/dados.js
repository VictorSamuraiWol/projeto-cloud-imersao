// usando esse arquivo como opção 1, caso não queira mockar uma API. Como opção 2, caso queira mockar uma API utilizar o arquivo db.json presente na pasta src.

let services = [
    {
    image: "src/img/EC2.png",
    name: "EC2 (Elastic Compute Cloud)",
    description: "O Amazon Elastic Compute Cloud (Amazon EC2) oferece a plataforma de computação mais ampla e aprofundada, com mais de 750 instâncias e opções de processadores, armazenamentos, redes, sistemas operacionais e modelos de compras mais recentes para ajudar você a atender melhor às necessidades da sua workload. Somos o primeiro grande provedor de nuvem a oferecer suporte para processadores Intel, AMD e Arm, a única nuvem com instâncias Mac do EC2 sob demanda e a única nuvem com redes Ethernet de 400 Gbps. Oferecemos a melhor performance de preço para treinamento de machine learning, bem como o menor custo por instâncias de inferência na nuvem. Mais workloads SAP, computação de alta performance (HPC), ML e Windows são executadas na AWS do que qualquer outra nuvem.",
    link: "https://aws.amazon.com/pt/ec2/",
    category: "Computação",
    tags: "instancias virtuais, computação em nuvem, elasticidade"
    },
    {
    image: "src/img/Lambda.png",
    name: "Lambda",
    description: "O AWS Lambda é um serviço de computação que executa seu código em resposta a eventos e gerencia automaticamente os recursos de computação, tornando-se a maneira mais rápida de transformar uma ideia em aplicações de produção modernas e com tecnologia sem servidor.",
    link: "https://aws.amazon.com/pt/lambda/",
    category: "Computação",
    tags: "serverless, funções, eventos"
    },
    {
    image: "src/img/ElasticBeanstalk.png",
    name: "Elastic Beanstalk",
    description: "O Elastic Beanstalk é um serviço usado para implantação e escalabilidade de aplicações e serviços Web. Envie seu código e o Elastic Beanstalk gerencia automaticamente a implantação, desde o provisionamento de capacidade, balanceamento de carga e escalabilidade automática até o monitoramento da integridade de aplicações.",
    link: "https://aws.amazon.com/pt/elasticbeanstalk",
    category: "Computação",
    tags: "deploy, escalabilidade, aplicações web"
    },
    {
    image: "src/img/Lightsail.png",
    name: "Lightsail",
    description: "O Amazon Lightsail oferece instâncias de servidor privado virtual (VPS) fáceis de usar, contêineres, armazenamento, bancos de dados e muito mais a um preço mensal econômico.",
    link: "https://aws.amazon.com/pt/cloudwatch/",
    category: "Computação",
    tags: "VPS, fácil de usar, desenvolvimento"
    },
    {
    image: "src/img/SimpleStorageService.png",
    name: "S3 (Simple Storage Service)",
    description: "O Amazon Simple Storage Service (Amazon S3) é um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e performance líderes do setor. Clientes de todos os portes e setores podem armazenar e proteger qualquer quantidade de dados de praticamente qualquer caso de uso, como data lakes, aplicações nativas da nuvem e aplicações móveis. Com classes de armazenamento econômicas e recursos de gerenciamento fáceis de usar, você pode otimizar custos, organizar dados e configurar controles de acesso ajustados para atender a requisitos específicos de negócios, organizacionais e de conformidade.",
    link: "https://aws.amazon.com/pt/s3/",
    category: "Armazenamento",
    tags: "objetos, armazenamento em nuvem, escalabilidade"
    },
    {
    image: "src/img/ElasticBlockStore.png",
    name: "EBS (Elastic Block Store)",
    description: "O Amazon Elastic Block Store (Amazon EBS) é um serviço de armazenamento em blocos fácil de usar, escalável e de alta performance projetado para o Amazon Elastic Compute Cloud (Amazon EC2).",
    link: "https://aws.amazon.com/pt/ebs/",
    category: "Armazenamento",
    tags: "armazenamento em bloco, persistente, EC2"
    },
    {
    image: "src/img/EFS.png",
    name: "EFS (Elastic File System)",
    description: "O Amazon Elastic File System (Amazon EFS) aumenta e diminui automaticamente conforme você adiciona e remove arquivos, sem a necessidade de gerenciamento ou provisionamento.",
    link: "https://aws.amazon.com/pt/efs/",
    category: "Armazenamento",
    tags: "armazenamento compartilhado, escalável, NFS"
    },
    {
    image: "src/img/RDS.png",
    name: "RDS (Relational Database Service)",
    description: "O Amazon Relational Database Service (Amazon RDS) é um serviço de banco de dados relacional de fácil gerenciamento e otimizado para o custo total de propriedade. É simples de configurar, operar e escalar de acordo com a demanda. O Amazon RDS automatiza as tarefas genéricas de gerenciamento de banco de dados, como provisionamento, configuração, backups e aplicação de patches. O Amazon RDS permite que os clientes criem um novo banco de dados em minutos e oferece flexibilidade para personalizar bancos de dados para atender às suas necessidades em 8 mecanismos e 2 opções de implantação.",
    link: "https://aws.amazon.com/pt/rds/",
    category: "Banco de Dados",
    tags: "banco de dados relacional, gerenciado, escalável"
    },
    {
    image: "src/img/DynamoDB.png",
    name: "DynamoDB",
    description: "O Amazon DynamoDB é um serviço de banco de dados NoSQL sem servidor que permite desenvolver aplicações modernas em qualquer escala. Como um banco de dados sem servidor, você paga apenas pelo que usa. Além disso, o DynamoDB é escalável até zero, não tem inicializações a frio, upgrades de versão, janelas de manutenção, aplicação de patches nem manutenção com tempo de inatividade. O DynamoDB oferece um amplo conjunto de controles de segurança e padrões de conformidade. Para aplicações distribuídas globalmente, as tabelas globais do DynamoDB são um banco de dados multirregional e multiativo com um SLA de disponibilidade de 99,999% e maior resiliência. A confiabilidade do DynamoDB tem suporte por backups gerenciados, recuperação pontual e muito mais. Com streams do DynamoDB, você pode criar aplicações orientadas por eventos sem servidor.",
    link: "https://aws.amazon.com/pt/dynamodb/",
    category: "Banco de Dados",
    tags: "NoSQL, baixo latência, escalabilidade"
    },
    {
    image: "src/img/Aurora.png",
    name: "Aurora",
    description: "O Amazon Aurora oferece alta performance e disponibilidade incomparáveis em escala global com compatibilidade total com o MySQL e o PostgreSQL, a um décimo do custo dos bancos de dados comerciais. O Aurora tem uma throughput cinco vezes superior à do MySQL e três vezes superior à do PostgreSQL. A Aurora tem amplos padrões de conformidade, bem como os melhores recursos de segurança da categoria. O Aurora oferece resiliência de armazenamento, tornando os dados estáveis em 3 AZs (os clientes pagam apenas por 1 cópia). O Aurora tem disponibilidade de até 99,99%, e os clientes podem acessar a performance de leitura local com o Banco de Dados Global quando este está implantado nas Regiões da AWS.",
    link: "https://aws.amazon.com/pt/rds/aurora/",
    category: "Banco de Dados",
    tags: "relacional, alta performance, MySQL PostgreSQL"
    },
    {
    image: "src/img/Redshift.png",
    name: "Redshift",
    description: "Dezenas de milhares de clientes usam o Amazon Redshift todos os dias para modernizar as workloads de análise de dados e obter insights para os negócios. Com uma arquitetura de processamento paralelo massivo (MPP) totalmente gerenciada, alimentada por IA, o Amazon Redshift impulsiona a tomada de decisões de negócios de forma rápida e econômica. A abordagem ETL zero da AWS unifica todos os dados para análises poderosas, casos de uso quase em tempo real e aplicações de AI/ML. Compartilhe e colabore em dados com facilidade e segurança dentro e entre organizações, regiões da AWS e até mesmo provedores de dados terceirizados, com o suporte de recursos de segurança líderes do setor e governança refinada. ",
    link: "https://aws.amazon.com/pt/redshift/",
    category: "Banco de Dados",
    tags: "data warehouse, análise de dados, volume de dados"
    },
    {
    image: "src/img/VirtualPrivateCloud.png",
    name: "VPC (Virtual Private Cloud)",
    description: "O Amazon Virtual Private Cloud (Amazon VPC) oferece controle total sobre seu ambiente de redes virtual, incluindo posicionamento de recursos, conectividade e segurança. Comece a usar configurando sua VPC no console de serviço AWS. Em seguida, adicione recursos a ela, como instâncias do Amazon Elastic Compute Cloud (EC2) e Amazon Relational Database Service (RDS). Por fim, defina como suas VPCs se comunicam entre si, entre contas, zonas de disponibilidade (AZs) ou Regiões da AWS. No exemplo abaixo, o tráfego de rede está sendo compartilhado entre duas VPCs em cada região.",
    link: "https://aws.amazon.com/pt/vpc/",
    category: "Redes",
    tags: "rede virtual privada, isolamento, segurança"
    },
    {
    image: "src/img/Route53.png",
    name: "Route 53",
    description: "O Amazon Route 53 é um serviço da Web de Sistema de Nomes de Domínio (DNS) altamente disponível e escalável. O Route 53 conecta as requisições do usuário a aplicações da Internet executadas na AWS ou on-premises.",
    link: "https://aws.amazon.com/pt/route53/",
    category: "Redes",
    tags: "DNS, alta disponibilidade, roteamento de tráfego"
    },
    {
    image: "src/img/DirectConnect.png",
    name: "Direct Connect",
    description: "O serviço de nuvem AWS Direct Connect é o caminho mais curto para seus recursos na AWS. Seu tráfego de rede permanece todo o tempo na rede global da AWS e nunca entra na Internet pública. Isso reduz as probabilidades de gargalos ou aumentos inesperados de latência. Ao criar uma conexão, você pode escolher uma conexão hospedada fornecida por um parceiro de entrega do AWS Direct Connect ou uma conexão dedicada da AWS e implantá-la em locais do AWS Direct Connect ao redor do mundo. Com o AWS Direct Connect SiteLink, você pode enviar dados entre locais do AWS Direct Connect para criar conexões privadas de rede entre os escritórios e datacenters na sua rede global.",
    link: "https://aws.amazon.com/pt/directconnect/",
    category: "Redes",
    tags: "conectividade dedicada, baixa latência, rede privada"
    },
    {
    image: "src/img/SitetoSiteVPN.png",
    name: "Site-to-Site VPN",
    description: "O AWS Site-to-Site VPN é um serviço totalmente gerenciado que cria uma conexão segura entre seu datacenter ou sua filial e seus recursos da AWS usando túneis de segurança de IP (IPSec). Ao usar o Site-to-Site VPN, você pode se conectar tanto às suas Amazon Virtual Private Clouds (VPC) quanto ao AWS Transit Gateway, e dois túneis por conexão são usados para aumentar a redundância.",
    link: "https://aws.amazon.com/pt/vpn/site-to-site-vpn/",
    category: "Redes",
    tags: "VPN, rede privada, conectividade segura"
    },
    {
    image: "src/img/CloudFormation.png",
    name: "Cloudformation",
    description: "O AWS CloudFormation permite modelar, provisionar e gerenciar recursos da AWS e de terceiros ao tratar a infraestrutura como código.",
    link: "https://aws.amazon.com/pt/cloudformation/",
    category: "Gerenciamento",
    tags: "infraestrutura como código, provisionamento, templates"
    },
    {
    image: "src/img/CloudWatch.png",
    name: "Cloudwatch",
    description: "O Amazon CloudWatch é um serviço que monitora aplicações, responde às mudanças de desempenho, otimiza o uso de recursos e fornece insights sobre a integridade operacional. Ao coletar dados de todos os recursos da AWS, o CloudWatch fornece visibilidade sobre o desempenho de todo o sistema e permite que os usuários definam alarmes, reajam automaticamente às mudanças e obtenham uma visão unificada da integridade operacional.",
    link: "https://aws.amazon.com/pt/cloudwatch/",
    category: "Gerenciamento",
    tags: "monitoramento, métricas, alarmes"
    },
    {
    image: "src/img/TrustedAdvisor.png",
    name: "Trusted Advisor",
    description: "O AWS Trusted Advisor ajuda você a otimizar custos, aumentar a performance, melhorar a segurança e a resiliência e operar em grande escala na nuvem. O Trusted Advisor avalia continuamente seu ambiente da AWS usando verificações de práticas recomendadas entre as categorias de otimização de custos da nuvem, performance, resiliência, segurança, excelência operacional e limites de serviço, e recomenda ações para remediar todos os desvios em relação às práticas recomendadas. O Trusted Advisor Priority ajuda os clientes do AWS Enterprise Support a se concentrarem nas recomendações mais importantes, fornecendo recomendações orientadas pelo contexto e priorizadas de sua equipe de contas da AWS.",
    link: "https://aws.amazon.com/pt/premiumsupport/technology/trusted-advisor/",
    category: "Gerenciamento",
    tags: "otimização, melhores práticas, recomendações"
    },
    {
    image: "src/img/CloudTrail.png",
    name: "Cloudtrail",
    description: "O AWS CloudTrail é um serviço que possibilita governança, conformidade, auditoria operacional e auditoria de riscos na sua conta da AWS.",
    link: "https://aws.amazon.com/pt/cloudtrail/",
    category: "Segurança",
    tags: "auditoria, logs, conformidade"
    },
    {
    image: "src/img/IAMIdentityCenter.png",
    name: "IAM",
    description: "Use o IAM para gerenciar e escalar a workload e o acesso da força de trabalho com segurança, apoiando sua agilidade e inovação na AWS.",
    link: "https://aws.amazon.com/pt/iam/",
    category: "Segurança",
    tags: "identidade, acesso, controle de acesso"
    },
    {
    image: "src/img/WAF.png",
    name: "WAF",
    description: "O AWS WAF ajuda você a se proteger contra explorações comuns da Web e bots que podem afetar a disponibilidade, comprometer a segurança ou consumir recursos excessivos.",
    link: "https://aws.amazon.com/pt/waf/",
    category: "Segurança",
    tags: "web application firewall, proteção, DDoS"
    },
    {
    image: "src/img/Shield.png",
    name: "Shield",
    description: "O AWS Shield é um serviço gerenciado de proteção contra DDoS que protege as aplicações em execução na AWS.",
    link: "https://aws.amazon.com/pt/shield/",
    category: "Segurança",
    tags: "DDoS, proteção, resiliência"
    },
    {
    image: "src/img/CodeCommit.png",
    name: "Codecommit",
    description: "O AWS CodeCommit é um serviço de controle de código-fonte totalmente gerenciado, seguro e altamente escalável que hospeda repositórios privados do Git.",
    link: "https://aws.amazon.com/pt/codecommit/",
    category: "Desenvolvimento",
    tags: "git, repositório, controle de versão"
    },
    {
    image: "src/img/CodePipeline.png",
    name: "Codepipeline",
    description: "O AWS CodePipeline é um serviço totalmente gerenciado de entrega contínua que ajuda a automatizar pipelines de lançamento para oferecer atualizações rápidas e confiáveis de aplicações e infraestruturas.",
    link: "https://aws.amazon.com/pt/codepipeline/",
    category: "Desenvolvimento",
    tags: "pipeline, entrega contínua, automatização"
    },
    {
    image: "src/img/CodeBuild.png",
    name: "Codebuild",
    description: "O AWS CodeBuild é um serviço de integração contínua totalmente gerenciado que compila código-fonte, executa testes e produz pacotes de software prontos para implantação.",
    link: "https://aws.amazon.com/pt/codebuild/",
    category: "Desenvolvimento",
    tags: "compilação, testes, integração contínua"
    },
    {
    image: "src/img/SageMaker.png",
    name: "Sagemaker",
    description: "O Amazon SageMaker é um serviço totalmente gerenciado que reúne um amplo conjunto de ferramentas para proporcionar machine learning (ML) de alta performance e baixo custo para qualquer caso de uso. Com o SageMaker, você pode criar, treinar e implantar modelos de ML em grande escala usando ferramentas como cadernos, depuradores, perfiladores, pipelines, MLOps e muito mais, tudo em um ambiente de desenvolvimento integrado (IDE). O SageMaker oferece suporte aos requisitos de governança com controle de acesso simplificado e transparência sobre seus projetos de ML. Além disso, você pode criar seus próprios FMs, modelos grandes que foram treinados em grandes conjuntos de dados, com ferramentas específicas para ajustar, experimentar, retreinar e implantar FMs. O SageMaker oferece acesso a centenas de modelos pré-treinados, incluindo FMs disponíveis publicamente, que você pode implantar com apenas alguns cliques.",
    link: "https://aws.amazon.com/pt/sagemaker/",
    category: "Machine Learning",
    tags: "machine learning, modelos, treinamento"
    },
    {
    image: "src/img/Rekognition.png",
    name: "Rekognition",
    description: "O Amazon Rekognition oferece recursos de visão computacional (CV) pré-treinados e personalizáveis para extrair informações e insights das suas imagens e vídeos.",
    link: "https://aws.amazon.com/pt/rekognition/",
    category: "Machine Learning",
    tags: "visão computacional, imagens, vídeos"
    },
    {
    image: "src/img/Comprehend.png",
    name: "Comprehend",
    description: "O Amazon Comprehend é um serviço de processamento de linguagem natural (NLP) que usa machine learning para descobrir insights e relações nos textos.",
    link: "https://aws.amazon.com/pt/comprehend/",
    category: "Machine Learning",
    tags: "processamento de linguagem natural, NLP, texto"
    },
    {
    image: "src/img/ElasticContainerService.png",
    name: "Elastic Container Service",
    description: "O Amazon Elastic Container Service (ECS) é um serviço totalmente gerenciado de orquestração de contêineres que ajuda a implantar, gerenciar e escalar aplicações em contêineres de maneira mais eficiente. Ele se integra totalmente ao ambiente da AWS para fornecer uma solução fácil de usar para executar workloads de contêineres na nuvem e on-premises com atributos de segurança avançados usando o Amazon ECS Anywhere.",
    link: "https://aws.amazon.com/pt/ecs/",
    category: "Contêineres",
    tags: "orquestração, contêineres, Docker"
    },
    {
    image: "src/img/ElasticKubernetesService.png",
    name: "Elastic Kubernetes Service",
    description: "O Amazon Elastic Kubernetes Service (Amazon EKS) é um serviço gerenciado do Kubernetes para executar o Kubernetes na nuvem da AWS e em datacenters on-premises. Na nuvem, o Amazon EKS gerencia automaticamente a disponibilidade e a escalabilidade dos nós do ambiente de gerenciamento do Kubernetes, que são responsáveis por programar contêineres, gerenciar a disponibilidade das aplicações, armazenar dados de cluster e outras tarefas principais. Com o Amazon EKS, você pode aproveitar toda a performance, escalabilidade, confiabilidade e disponibilidade da infraestrutura da AWS, bem como integrações com serviços de rede e segurança da AWS. On-premises, o EKS fornece uma solução Kubernetes consistente e totalmente compatível com ferramentas integradas e implantação simples em AWS Outposts, máquinas virtuais ou servidores bare metal.",
    link: "https://aws.amazon.com/pt/eks/",
    category: "Contêineres",
    tags: "Kubernetes, gerenciado, orquestração"
    },
    {
    image: "src/img/KinesisDataStreams.png",
    name: "Kinesis Data Streams",
    description: "O Amazon Kinesis Data Streams é um serviço sem servidor que torna fácil a captura, o processamento e o armazenamento de transmissões de dados em qualquer escala.",
    link: "https://aws.amazon.com/pt/kinesis/data-streams/",
    category: "Streaming",
    tags: "streaming de dados, real-time, processamento"
    },
    {
    image: "src/img/KinesisFirehose.png",
    name: "Kinesis Firehose",
    description: "O Amazon Data Firehose fornece a maneira mais fácil de adquirir, transformar e entregar stream de dados em segundos para data lakes, data warehouses e serviços de análise. Para usar o Amazon Data Firehose, você configura um fluxo com uma origem, destino e transformações necessárias. O Amazon Data Firehose processa continuamente o stream, dimensiona automaticamente com base na quantidade de dados disponíveis e os entrega em segundos.",
    link: "https://aws.amazon.com/pt/firehose/",
    category: "Streaming",
    tags: "ingestão de dados, data lakes, transformação"
    }
]

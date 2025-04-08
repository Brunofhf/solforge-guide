import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Sword, Shield, Scroll, Sparkles, ChevronRight, Flame,
  Video, Clock, Wand2, LayoutGrid, Layers, Users, Dices
} from 'lucide-react';

const sections = [
  {
    id: 'intro',
    title: 'O que é SolForge Fusion?',
    icon: <Sparkles className="w-6 h-6" />,
    content: `SolForge Fusion é um jogo de cartas colecionáveis inovador, criado por duas lendas do design de jogos: **Richard Garfield** (criador de Magic: The Gathering) e **Justin Gary**. Ele combina o melhor do físico e do digital, oferecendo partidas dinâmicas, decks únicos gerados por algoritmo e uma evolução natural das cartas conforme você joga. Aqui, cada partida é diferente e cada deck conta uma história singular.`
  },
  {
    id: 'objective',
    title: 'Objetivo do Jogo',
    icon: <Sword className="w-6 h-6" />,
    content: `O objetivo é simples e direto: **reduzir a vida do seu oponente de 50 a 0** antes que ele faça o mesmo com você. Para isso, você usará criaturas, feitiços e habilidades estrategicamente enquanto evolui suas cartas ao longo da partida.

Caso os quatro turnos sejam concluídos sem que nenhum jogador tenha sua vida reduzida a 0, **vence quem tiver mais pontos de vida restantes**.`
  },
  {
    id: 'basics',
    title: 'Preparando a Partida',
    icon: <Shield className="w-6 h-6" />,
    content: `Cada jogador:
- Combina **dois Half-Decks** para formar um deck completo e único.
- Começa com **50 pontos de vida**.
- Escolhe seu **Forgeborn**, um herói especial que oferece habilidades exclusivas para ativar durante o jogo.
- Embaralha suas cartas e compra uma mão inicial de **cinco cartas**.

Cada Half-Deck é registrado individualmente e pode ser escaneado para jogar tanto no físico quanto no digital, garantindo integração completa.`
  },
  {
    id: 'structure',
    title: 'Estrutura do Jogo',
    icon: <Clock className="w-6 h-6" />,
    content: `A partida de SolForge Fusion é dividida em **quatro turnos principais**. Cada turno é composto de **quatro rodadas**.

- **Cada Rodada**:
  - Ambos os jogadores jogam suas ações alternadamente.
  - Em cada rodada, o jogador com a **Forja** (Forgemaster) joga primeiro.
  - No final de cada rodada, a Forja passa para o outro jogador.

- **Cada Turno**:
  - Contém quatro rodadas completas.
  - Após as quatro rodadas, ocorre um **Deck Cycle**: o deck e a pilha de descarte são embaralhados juntos.
  - O Forgeborn do jogador avança para o próximo nível, liberando novas habilidades.

- **Resumo**:
  - 1 Turno = 4 Rodadas.
  - 1 Partida = 4 Turnos (Turnos 1 a 4).

A gestão correta dos ciclos de rodadas e do uso da Forja é essencial para dominar o ritmo da partida.`
  },
  {
    id: 'phases',
    title: 'Fases de Cada Rodada',
    icon: <Scroll className="w-6 h-6" />,
    content: `Cada rodada é dividida em três fases principais:

1. **Fase de Ação**
   - Jogadores alternam jogadas: cada um faz uma ação de jogar uma carta ou ativar uma habilidade.
   - Cada jogador pode realizar **duas ações** em sua vez.
   - Sempre que uma carta é jogada, a versão de **nível superior** é separada para a pilha de descarte.

2. **Fase de Combate**
   - As criaturas atacam automaticamente as criaturas inimigas à sua frente ou o jogador adversário diretamente.

3. **Fase Final**
   - Descarte toda a mão restante.
   - Compre cinco novas cartas.
   - A Forja troca de mãos para a próxima rodada.

**Importante**: A cada nova rodada dentro do turno, o jogador que começa inverte, garantindo uma dinâmica justa e estratégica.`
  },
  {
    id: 'evolution',
    title: 'Evolução das Cartas',
    icon: <Wand2 className="w-6 h-6" />,
    content: `Um dos grandes diferenciais de SolForge Fusion é a evolução progressiva das cartas:

- Ao jogar uma carta da sua mão, você procura pela versão de **nível superior** no seu deck e a envia para sua pilha de descarte.
- Essas cartas não entram em jogo imediatamente, mas farão parte do seu novo deck após o embaralhamento, quando você terminar as cartas do deck atual.
- Isso cria uma dinâmica onde o seu baralho se torna mais forte e complexo a cada ciclo, exigindo adaptação e planejamento constante.

Evoluir suas cartas no momento certo é essencial para dominar partidas mais longas e desafiadoras.`
  },
  {
    id: 'cardtypes',
    title: 'Tipos de Cartas',
    icon: <LayoutGrid className="w-6 h-6" />,
    content: `Existem quatro tipos principais de cartas em SolForge Fusion:

- **Criaturas**: Permanecem em campo e participam do combate, podendo evoluir para formas mais poderosas.
- **Feitiços (Spells)**: São jogados para criar efeitos imediatos e depois são descartados.
- **Modificadores (Modifiers)**: Aumentam ou reduzem atributos de criaturas em campo, podendo fortalecer sua linha de frente ou enfraquecer a do oponente.
- **Exaltos (Exalts)**: Melhoram permanentemente uma lane do campo de batalha, concedendo vantagens a todas as criaturas posicionadas ali.

Dominar a combinação entre esses tipos de cartas é essencial para criar sinergias fortes no seu deck.`
  },
  {
    id: 'factions',
    title: 'Facções',
    icon: <Users className="w-6 h-6" />,
    content: `Cada carta pertence a uma das quatro facções que definem seu estilo de jogo:

- **Tempys**: Força bruta, agressividade e dano explosivo.
- **Alloyin**: Resistência, armaduras e melhoria constante.
- **Uterra**: Crescimento, regeneração e criaturas gigantescas.
- **Nekrium**: Controle, manipulação de mortos e dreno de vida.

Cada facção traz táticas e sinergias específicas, permitindo que você adapte seu estilo de jogo ao seu deck e ao seu plano de vitória.`
  },
  {
    id: 'decks',
    title: 'Decks Únicos e Fusão',
    icon: <Layers className="w-6 h-6" />,
    content: `- Cada Half-Deck é único no mundo, com combinações exclusivas de cartas.
- Ao combinar dois Half-Decks, você cria um deck personalizado e imprevisível.
- Isso garante partidas sempre frescas, criativas e com um metagame que se reinventa naturalmente.

A fusão dos Half-Decks permite experiências variadas e cria oportunidades infinitas para descobrir novas estratégias.`
  },
  {
    id: 'conclusion',
    title: 'Conclusão',
    icon: <Dices className="w-6 h-6" />,
    content: `Desde que comecei a jogar TCGs, sempre procurei um jogo que unisse estratégia e dinamismo de forma simples e inteligente. **SolForge Fusion** me conquistou justamente por isso: a simplicidade nos turnos, a variedade absurda de combinações entre decks, o modo online x1 e a campanha que é muito divertida. 

Ainda estou no começo da minha jornada nesse universo, mas pretendo seguir firme até dominar de verdade o jogo. Se você também curte jogos que evoluem com você a cada partida, pode apostar que SolForge Fusion vai te ganhar também!`
  },
  {
    id: 'videos',
    title: 'Vídeos e Tutoriais',
    icon: <Video className="w-6 h-6" />,
    content: `Em breve, adicionaremos vídeos tutoriais para ajudar você a aprender mais sobre SolForge Fusion. Fique ligado!`
  }
];

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="mb-8">
            <img 
              src="https://solforgefusion.com/images/logo.png"
              alt="SolForge Fusion"
              className="h-32 mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl hero-title mb-4">
            Guia do Iniciante
          </h1>
          <p className="text-xl hero-subtitle max-w-2xl mx-auto">
            Aprenda a jogar o revolucionário TCG que combina o físico e o digital
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="section-card">
              <button
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                className="w-full flex items-center gap-3 p-6 text-left hover:bg-orange-900/10 transition-colors"
              >
                <div className="icon-container p-3 rounded-lg text-[#ff6b24]">
                  {section.icon}
                </div>
                <span className="text-xl font-semibold text-orange-100/90 flex-1">
                  {section.title}
                </span>
                <ChevronRight 
                  className={`w-6 h-6 text-[#ff6b24] transition-transform duration-200 ${
                    activeSection === section.id ? 'rotate-90' : ''
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === section.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0">
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{section.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-orange-100/60">
        <p>Feito com <Flame className="inline-block w-4 h-4 text-[#ff6b24]" /> por fãs de SolForge Fusion</p>
      </footer>
    </div>
  );
}

export default App;
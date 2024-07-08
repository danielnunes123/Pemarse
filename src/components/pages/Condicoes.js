import React from 'react';
import './Condicoes.css';  // Importa o arquivo CSS

export default function Condicoes() {
  return (
    <div className='Container'>
      <h2><span className="texto-cinza">1. Termos</span></h2>
      <p className="texto-cinza">
        Ao acessar ao site <a href="https://pemarse.vercel.app/">Pemarse</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
      </p>
      <h2><span className="texto-cinza">2. Uso de Licença</span></h2>
      <p className="texto-cinza">
        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Pemarse , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
      </p>
      <ol>
        <li className="texto-cinza">modificar ou copiar os materiais;</li>
        <li className="texto-cinza">usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
        <li className="texto-cinza">tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Pemarse;</li>
        <li className="texto-cinza">remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
        <li className="texto-cinza">transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
      </ol>
      <p className="texto-cinza">
        Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Pemarse a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
      </p>
      <h2><span className="texto-cinza">3. Isenção de responsabilidade</span></h2>
      <ol>
        <li className="texto-cinza">Os materiais no site da Pemarse são fornecidos 'como estão'. Pemarse não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
        <li className="texto-cinza">Além disso, o Pemarse não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
      </ol>
      <h2><span className="texto-cinza">4. Limitações</span></h2>
      <p className="texto-cinza">
        Em nenhum caso o Pemarse ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Pemarse, mesmo que Pemarse ou um representante autorizado da Pemarse tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
      </p>
      <h2><span className="texto-cinza">5. Precisão dos materiais</span></h2>
      <p className="texto-cinza">
        Os materiais exibidos no site da Pemarse podem incluir erros técnicos, tipográficos ou fotográficos. Pemarse não garante que qualquer material em seu site seja preciso, completo ou atual. Pemarse pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Pemarse não se compromete a atualizar os materiais.
      </p>
      <h2><span className="texto-cinza">6. Links</span></h2>
      <p className="texto-cinza">
        O Pemarse não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Pemarse do site. O uso de qualquer site vinculado é por conta e risco do usuário.
      </p>
      <h3><span className="texto-cinza">Modificações</span></h3>
      <p className="texto-cinza">
        O Pemarse pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
      </p>
      <h3><span className="texto-cinza">Lei aplicável</span></h3>
      <p className="texto-cinza">
        Estes termos e condições são regidos e interpretados de acordo com as leis do Pemarse e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
      </p>
    </div>
  );
}

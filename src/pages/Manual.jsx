export function Manual() {
    return (
        <section className="max-w-2xl mx-auto bg-purple-100 text-gray-900 rounded-xl p-6 mt-10 shadow-sm">
            <h2 className="text-lg text-[30px] pt-5 pb-5 font-bold mb-4">Como usar sua Talk Pro?</h2>

            <div className="text-sm space-y-6">
                <div>
                    <h3 className="font-semibold mb-1">Componentes da Pulseira</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Botão de Liga/Desliga: ativa ou desativa o dispositivo.</li>
                        <li>Botão de Emergência: permite enviar alertas em situações críticas.</li>
                        <li>Botões de Navegação: para cima e para baixo; usados para navegar pelos menus.</li>
                        <li>Botões OK: confirmam ações no dispositivo.</li>
                        <li>Bluetooth: conecta ao celular para configurações avançadas.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">2. Início Rápido</h3>
                    <p><strong>Ligando e desligando a pulseira:</strong></p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Pressione o botão de liga/desliga por alguns segundos até sentir um alerta vibratório ou visualizar um indicador luminoso.</li>
                        <li>Para desligar, mantenha pressionado o botão novamente.</li>
                    </ul>

                    <p className="mt-2"><strong>Emparelhamento com o celular:</strong></p>
                    <ol className="list-decimal list-inside pl-4 space-y-1">
                        <li>Ative o Bluetooth do celular.</li>
                        <li>Ligue a pulseira e entre no modo de emparelhamento (verifique no manual como acessar).</li>
                        <li>No celular, acesse as configurações de Bluetooth e selecione Talk Pro na lista de dispositivos disponíveis.</li>
                        <li>Confirme o emparelhamento e siga as instruções.</li>
                    </ol>
                </div>

                <div>
                    <h3 className="font-semibold mb-1">3. Funcionamento Geral</h3>
                    <p><strong>Usando o botão de emergência:</strong></p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Pressione o botão de emergência para ativar a função de alerta.</li>
                        <li>Dependendo das configurações, a pulseira poderá emitir sons ou enviar mensagens automáticas.</li>
                    </ul>

                    <p className="mt-2"><strong>Navegação nos menus:</strong></p>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Use os botões para cima e para baixo para entrar em seções.</li>
                        <li>Use o botão OK para confirmar.</li>
                    </ul>
                </div>


                <div>
                    <h3 className="font-semibold mb-1">4. Cuidados e Manutenção</h3>
                    <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Evite exposições à água excessiva, a menos que o dispositivo seja certificado como à prova d’água.</li>
                        <li>Mantenha a pulseira carregada para garantir seu funcionamento.</li>
                        <li>Reinicie o dispositivo caso perceba lentidão ou falhas no reconhecimento de comandos.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-1">5. Suporte e Ajuda</h3>
                    <p>Caso precise de mais informações sobre a Talk Pro, consulte o manual oficial ou entre em contato com o suporte técnico da marca.</p>
                </div>
            </div>
        </section>
    );
}

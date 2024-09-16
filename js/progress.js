// progress.js
document.getElementById('geradorbotao').addEventListener('click', function() {
    var progressContainer = document.getElementById('progress-container');
    var progressBar = document.getElementById('progress-bar');

    progressContainer.style.display = 'block'; // Mostra a barra de progresso

    var duration = 60; // Duração em segundos
    var startTime = Date.now();

    function updateProgress() {
        var elapsedTime = Date.now() - startTime;
        var progress = Math.min((elapsedTime / (duration * 1000)) * 100, 100); // Calcula o progresso
        progressBar.style.width = progress + '%'; // Atualiza a largura da barra

        if (progress < 100) {
            requestAnimationFrame(updateProgress); // Atualiza a cada frame
        } else {
            progressContainer.style.display = 'none'; // Esconde a barra quando completar
        }
    }

    updateProgress();
});

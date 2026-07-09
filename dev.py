import subprocess
import sys
import time
import os

def run_dev_server():
    print("🚀 Iniciando entorno de desarrollo de IgnacioGaldames.com...")
    
    # 1. Limpieza y construcción inicial
    print("🧹 Ejecutando: bundle exec jekyll clean...")
    try:
        subprocess.run(["bundle", "exec", "jekyll", "clean"], check=True, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Error al ejecutar jekyll clean: {e}")
        sys.exit(1)
        
    print("🏗️  Ejecutando: bundle exec jekyll build...")
    try:
        subprocess.run(["bundle", "exec", "jekyll", "build"], check=True, shell=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Error al ejecutar jekyll build: {e}")
        sys.exit(1)

    # 2. Definir los procesos en paralelo
    # Usamos cmd.exe /c start en Windows para abrir nuevas pestañas/ventanas de terminal para cada tarea
    processes = []
    
    commands = {
        "Jekyll Serve": "bundle exec jekyll serve --watch --incremental --port 4000 --config _config.yml,_config_dev.yml",
        "Sass Expanded": "sass --style=expanded --color --watch assets/scss/main.scss assets/css/main.css",
        "Sass Compressed": "sass --style=compressed --watch assets/scss/main.scss assets/css/main.min.css --no-source-map"
    }

    print("\n⚡ Iniciando servicios en paralelo:")
    for name, cmd in commands.items():
        print(f"   ▶️  Lanzando {name}...")
        # En Windows, 'start' abre una nueva ventana de comandos ejecutando la instrucción dada
        # 'cmd /k' mantiene la ventana abierta para ver los logs y errores
        full_command = f'start "{name}" cmd /k "{cmd}"'
        try:
            subprocess.Popen(full_command, shell=True)
        except Exception as e:
            print(f"❌ Error al iniciar {name}: {e}")
            
    print("\n🟢 ¡Todo listo! Se han abierto nuevas ventanas de terminal con los procesos.")
    print("Presiona Ctrl+C en esta terminal para finalizar el script de control (las ventanas iniciadas deben cerrarse manualmente).")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n👋 Script finalizado.")

if __name__ == "__main__":
    # Asegurar que estamos trabajando en el directorio del script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    run_dev_server()

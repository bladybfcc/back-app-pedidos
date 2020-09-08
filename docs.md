# COMANDOS GIT

## 1. Iniciar un repositorio local

- solo para los que estan iniciando el proyecto desde cero

```
git init
```

- para los que ya tienen un proyecto iniciado

```
git clone <dirección remota>
```

- para verificar el estado de cambios del proyecto

```
git status
```

- para agregar todos los archivos a lo zona intermedia (INDEX)

```
git add .
```

- para agregar al area de espera (HEAD)

```
git commit -m "Primer Commit"
```

### Ahora ya estamos preparados para subir al repositorio remoto

- Si quieres conectar tu repositorio local a un repositorio remoto:

```
git remote add origin https://github.com/bladybfcc/back- app-pedidos.git
```

- para verificar las direcciones remotas.

```
git remote -v

```

- para subir del repositorio local al repositorio remoto

```
git push -u origin master
```

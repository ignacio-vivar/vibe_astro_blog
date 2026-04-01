# Carpeta de PDFs

Coloca tus archivos PDF aquí.

Los PDFs se pueden incrustar en las páginas de unidades usando el componente `<PdfEmbed>`:

```astro
<PdfEmbed
  src="/pdfs/mi-archivo.pdf"
  title="Título del documento"
  height="700px"
/>
```

## Ejemplo
Si agregas un archivo llamado `ejemplo-introduccion.pdf` aquí,
puedes referenciarlo como `/pdfs/ejemplo-introduccion.pdf` en tu componente.

export async function GET() {
  return Response.json({
    mensaje: 'API conectada exitosamente',
    fecha: new Date().toISOString(),
  })
}

import React from 'react'
import { Divider, Grid, Typography } from "@material-ui/core";

import { Button } from "../../../shared/components";
import { editIcon } from "../../images";

export default function Index(props) {


    return (
        <Grid container spacing={3}>
            <Grid item xs={11}>
                <Grid container direction="row" justify="space-between">
                    <Grid item xs={6}>
                        <Typography variant="h6" component="h6">
                            Motorizado
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={() => console.log("edit")}>
                            <img src={editIcon} />
                            <span className="dashboard-title">EDITAR</span>
                        </Button>
                    </Grid>
                </Grid>
                <Divider />
            </Grid>
            <Grid item xs={11}>
                <Typography variant="subtitle2" component="h6">
                    <strong>Creado por</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    Marco Antonio Perez Diaz
                </Typography>
                <br />
                <Typography variant="subtitle2" component="h6">
                    <strong>Fecha de publicación</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    31/11/2020
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Fecha de caducidad</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    31/11/2020
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Categoría</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    Logistica - Distribucion
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Descripción</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    Somos Andes Perú, empresa peruana basada en la operación de negocios mineros de oro y plata en América.
                    Nos encontramos en la búsqueda de MOTORIZADOS. <br />
                    Vacante Disponible: <br />
                    REPARTIDORES TIEMPO COMPLETO - ANDES LIMA.
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Requisitos del puesto</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    Contar con moto propia y documentos actualizados (licencia de conducir, tarjeta de propiedad y SOAT). <br />
                    Tener disponibilidad trabajar part time 6 días a la semana en horario rotativo.<br />
                    Experiencia mínima de 3 meses, de preferencia en el rubro de fast food y restaurantes.<br />
                    Buena actitud, orientación al servicio, disposición para el aprendizaje y trabajo en equipo.<br />
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Dirección</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    Av. Industrial N° 1234
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Distrito</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    Ate
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Salario</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    1000
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Fecha de inicio</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    01/12/2020
                </Typography>
                <br />

                <Typography variant="subtitle2" component="h6">
                    <strong>Periodo de permanencia</strong>
                </Typography>
                <Typography variant="body1" component="h6">
                    1 año
                </Typography>
                <br />

            </Grid>
        </Grid>
    )
}

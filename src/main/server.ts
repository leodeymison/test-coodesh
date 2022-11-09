import "module-alias/register";
import app from "./config/app";
import env from "./config/env";
import PortManagement from "./module/ports";

PortManagement(app, env.PORT)
import React from "react";
import "./settings.css";
import { NavLink, Outlet } from "react-router-dom";
import { type IAccount } from "../../types/apisTypes";
interface ISet {
    storageAuth: string;
}
export default function Settings({ storageAuth }: ISet): JSX.Element {
    const data: IAccount = JSON.parse(storageAuth).account;

    return (
        <div className="settings-page-container">
            <div className="settings-header">
                <div className="settings-avatar">
                    <p>{data.fullName[0]}</p>
                </div>
                <h2>{data.fullName}</h2>
                <div className="settings-nav">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active-button nav-button" : "nav-button"
                        }
                        to={"edit-account"}
                        end>
                        Edit Account
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active-button nav-button" : "nav-button"
                        }
                        to={"order-history"}
                        end>
                        Order History
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active-button nav-button" : "nav-button"
                        }
                        to={"favorites"}
                        end>
                        Favorites
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

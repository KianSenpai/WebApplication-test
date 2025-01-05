<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Step5.aspx.cs" Inherits="WebApplication2.Step5" %>
<%@ Register Src="~/StepperControl.ascx" TagPrefix="uc" TagName="Stepper" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <gup-wizard-main>
        <uc:Stepper runat="server" ID="stepperControl" CurrentStep="5" />

        <h2 style="font-size: 28px; font-weight: 700; margin-top: var(--gup-spacing-between-text);">Academic details of the qualification you want to study</h2>
        <form>
            <gup-form-list style="margin-block: 48px;">
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">Study location</span>
                    <gup-dropdown-menu search-enabled="">
                        <gup-dropdown-menu-item label="Oman" id="item1"></gup-dropdown-menu-item>
                        <gup-dropdown-menu-item label="Narnia" id="item2"></gup-dropdown-menu-item>
                        <gup-track slot="controls" horizontal-alignment="right">
                            <gup-button id="button">
                                Apply
                            </gup-button>
                        </gup-track>
                    </gup-dropdown-menu>
                </gup-dropdown-field>
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">Country</span>
                    <gup-dropdown-menu search-enabled="">
                        <gup-dropdown-menu-item label="Oman" id="item11"></gup-dropdown-menu-item>
                        <gup-dropdown-menu-item label="Narnia" id="item21"></gup-dropdown-menu-item>
                        <gup-track slot="controls" horizontal-alignment="right">
                            <gup-button id="button1">
                                Apply
                            </gup-button>
                        </gup-track>
                    </gup-dropdown-menu>
                </gup-dropdown-field>
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">University</span>
                    <gup-dropdown-menu>
                        <gup-dropdown-menu-item label="Doomed" id="item1111"></gup-dropdown-menu-item>
                        <gup-dropdown-menu-item label="Free" id="item2111"></gup-dropdown-menu-item>
                        <gup-track slot="controls" horizontal-alignment="right">
                            <gup-button id="button111">
                                Apply
                            </gup-button>
                        </gup-track>
                    </gup-dropdown-menu>
                </gup-dropdown-field>
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">Study mode</span>
                    <gup-dropdown-menu>
                        <gup-dropdown-menu-item label="Doomed" id="item111"></gup-dropdown-menu-item>
                        <gup-dropdown-menu-item label="Free" id="item211"></gup-dropdown-menu-item>
                        <gup-track slot="controls" horizontal-alignment="right">
                            <gup-button id="button11">
                                Apply
                            </gup-button>
                        </gup-track>
                    </gup-dropdown-menu>
                </gup-dropdown-field>
                <gup-input-field type="date" name="your-message">
                    Start date
                </gup-input-field>
                <gup-input-field type="date" name="your-message">
                    Expected graduation date
                </gup-input-field>
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">Level of qualification</span>
                    <gup-dropdown-menu>
                        <gup-dropdown-menu-item label="Doomed" id="item11111"></gup-dropdown-menu-item>
                        <gup-dropdown-menu-item label="Free" id="item21111"></gup-dropdown-menu-item>
                        <gup-track slot="controls" horizontal-alignment="right">
                            <gup-button id="button1111">
                                Apply
                            </gup-button>
                        </gup-track>
                    </gup-dropdown-menu>
                </gup-dropdown-field>
                <gup-dropdown-field style="" name="name-of-the-field" placeholder="Select an item">
                    <span slot="label">Main major</span>
                    <gup-dropdown-menu>
                        <gup-dropdown-menu-item label="Doomed" id="item111111"></gup-dropdown-menu-item>
                        <gup-dropdown-menu-item label="Free" id="item211111"></gup-dropdown-menu-item>
                        <gup-track slot="controls" horizontal-alignment="right">
                            <gup-button id="button11111">
                                Apply
                            </gup-button>
                        </gup-track>
                    </gup-dropdown-menu>
                </gup-dropdown-field>
            </gup-form-list>
        </form>
    </gup-wizard-main>
    <gup-wizard-footer nav-aria-label="Service Navigation Footer">
        <div slot="start">
            <a href="~/Step4" runat="server">
                <gup-button slot="start" appearance="secondary">
                    Back
                    <gup-icon slot="icon-start" icon-name="arrow-back" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
        <div slot="end">
            <a href="~/Step6" runat="server">
                <gup-button appearance="primary">
                    Continue
                    <gup-icon slot="icon-end" icon-name="arrow-forward" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
    </gup-wizard-footer>

    <script>

        component.querySelector('#button').addEventListener('gup-click', () => {
            console.log(component.getSelectedDropdownItems());
            component.applyValue();
        });

    </script>
</asp:Content>

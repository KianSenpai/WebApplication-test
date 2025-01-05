<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication2._Default" %>
<%@ Register Src="~/StepperControl.ascx" TagPrefix="uc" TagName="Stepper" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <gup-wizard-main>
        <uc:Stepper runat="server" ID="stepperControl" CurrentStep="1" />

        <h2 style="font-size: 28px; font-weight: 700; margin-top: var(--gup-spacing-between-text);">Identifacion and name details</h2>
        <form>
            <gup-form-list style="margin-block: 48px;">
                <gup-input-field type="numeric" name="your-message">
                    ID number
                </gup-input-field>
                <gup-input-field type="date" name="your-message">
                    ID expiray date
                </gup-input-field>
                <gup-input-field type="date" name="your-message">
                    Date of birth
                </gup-input-field>
                <gup-input-field name="your-message">
                    English first name
                </gup-input-field>
                <gup-input-field name="your-message">
                    English second name <span class="font-weight-light">(optional)</span>
                </gup-input-field>
                <gup-input-field name="your-message">
                    English third name <span class="font-weight-light">(optional)</span>
                </gup-input-field>
                <gup-input-field name="your-message">
                    English last name <span class="font-weight-light">(optional)</span>
                </gup-input-field>
                <gup-input-field name="your-message">
                    Arabic first name
                </gup-input-field>
                <gup-input-field name="your-message">
                    Arabic second name <span class="font-weight-light">(optional)</span>
                </gup-input-field>
                <gup-input-field name="your-message">
                    Arabic third name <span class="font-weight-light">(optional)</span>
                </gup-input-field>
                <gup-input-field name="your-message">
                    Arabic last name <span class="font-weight-light">(optional)</span>
                </gup-input-field>
            </gup-form-list>
        </form>
    </gup-wizard-main>
    <gup-wizard-footer nav-aria-label="Service Navigation Footer">
        <gup-button slot="start" appearance="secondary" disabled="">
            Back
        <gup-icon slot="icon-start" icon-name="arrow-back" height="24" width="24"></gup-icon>
        </gup-button>
        <div slot="end">
            <a href="~/Step2" runat="server">
                <gup-button appearance="primary">
                    Continue
                    <gup-icon slot="icon-end" icon-name="arrow-forward" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
    </gup-wizard-footer>
</asp:Content>

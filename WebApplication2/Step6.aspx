<%@ Page Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Step6.aspx.cs" Inherits="WebApplication2.Step6" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <gup-wizard-main>
        <gup-details content-appearance="sink" closed-icon="add-circle" open-icon="remove-circle">
            <span slot="label">Step 6 of 8</span>
            <gup-stepper style="" static-mode="">
                <gup-stepper-item step-number="1" step-type="done" role="listitem" static-mode="">
                    <span slot="label">Identification and name details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="2" step-type="done" role="listitem" static-mode="">
                    <span slot="label">Personal details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="3" role="listitem" step-type="done" static-mode="">
                    <span slot="label">Contact information</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="4" role="listitem" step-type="done" static-mode="">
                    <span slot="label">Highschool academic details</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="5" role="listitem" step-type="done" static-mode="">
                    <span slot="label">Achademic details of qualification you want to study</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="6" role="listitem" step-type="selected" static-mode="">
                    <span slot="label">Upload files</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="7" role="listitem" step-type="default" static-mode="">
                    <span slot="label">Review your application</span>
                </gup-stepper-item>
                <gup-stepper-item step-number="8" role="listitem" step-type="default" static-mode="">
                    <span slot="label">Step 8</span>
                </gup-stepper-item>
            </gup-stepper>
        </gup-details>
        <h2 style="font-size: 28px; font-weight: 700; margin-top: var(--gup-spacing-between-text);">Upload files</h2>
        <br />
        <gup-data-sheet>
            <gup-labelled-item>
                <span slot="label">Document type</span>
                <ol style="list-style-type: decimal; margin-left: 32px;">
                    <li>The document type must be one of the following: .doc, .docx, .pdf, .pdfa, .jpg, .jpeg files</li>
                    <li>The file name must not consist of any symbols such as :(, _!@, and other symbols</li>
                    <li>Maximum file size allowed is 2MB</li>
                    <li>File name must not contain spaces</li>
                    <li>The size of the image must be 1MB and must be .jpg</li>
                    <li>Documents cannot be photocopy/scanned by mobile</li>
                </ol>
            </gup-labelled-item>
        </gup-data-sheet>
        <form>
            <gup-form-list style="margin-block: 48px;">
                <gup-file-upload name="file-upload">ID copy</gup-file-upload>
                <gup-file-upload name="file-upload">Passport copy</gup-file-upload>
                <gup-file-upload name="file-upload">Personal photo</gup-file-upload>
                <gup-file-upload name="file-upload">Academic report</gup-file-upload>
                <gup-file-upload name="file-upload">Previous certificates (high school)</gup-file-upload>
                <gup-checkbox name="your-checkbox" value="1" style="margin-top: 32px;">
                    I take full responsibility that my qualification and my transcript is an exact copy of the original qualification certificate and the above details given are true and I accept all the legal consequences in the event of proven conflict in what’s given. 
                </gup-checkbox>
            </gup-form-list>
        </form>
    </gup-wizard-main>
    <gup-wizard-footer nav-aria-label="Service Navigation Footer">
        <div slot="start">
            <a href="~/Step5" runat="server">
                <gup-button slot="start" appearance="secondary">
                    Back
                    <gup-icon slot="icon-start" icon-name="arrow-back" height="24" width="24"></gup-icon>
                </gup-button>
            </a>
        </div>
        <div slot="end">
            <a href="~/Step7" runat="server">
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

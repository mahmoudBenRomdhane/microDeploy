import { Injectable, NotFoundException } from '@nestjs/common';
import { GraphQLError } from 'graphql';
const axios = require('axios');

@Injectable()
export class UsersService {
  static async getToken(): Promise<any> {
    let data = JSON.stringify({
      email: 'mahmoudben@gmail.com',
      password: 'pino1905',
    });

    let config = {
      method: 'post',
      url: 'http://145.239.168.115:8080/api/v1/auth/user/signin',
      headers: {
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=7f090c83901cf25b14f513c8a54fe20e0dac3ec951c2780501d9bd349f89a9f86f84d46022d53229',
      },
      data: data,
    };
    const response: string = await axios(config);
    return response;
  }

  static async getProjects(): Promise<any> {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: 'http://145.239.168.115:8080/api/v1/db/meta/projects/',
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=a76f010a6b08ba1c76b536fb0203eb6082cc6b5b72623aaa283eb3a6a6b481ede666b3322aa94205',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addProject(dataa: any): Promise<any> {
    const responseAuth = await UsersService.getToken();
    let data = JSON.stringify({
      title: dataa.title,
    });

    let config = {
      method: 'post',
      url: 'http://145.239.168.115:8080/api/v1/db/meta/projects/',
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=a76f010a6b08ba1c76b536fb0203eb6082cc6b5b72623aaa283eb3a6a6b481ede666b3322aa94205',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getProject(projectId: string) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/meta/projects/${projectId}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=78844d697f4510f8df00e3741c4e51b271c80ea5a199bce403c847edcb041ddf13d8fafada48f8b5',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getTables(projectId: string) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/meta/projects/${projectId}/tables?includeM2M=false`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=78844d697f4510f8df00e3741c4e51b271c80ea5a199bce403c847edcb041ddf13d8fafada48f8b5',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addTable(table: any) {
    const responseAuth = await UsersService.getToken();
    let data = {
      title: `${table.categorieTitle + '_' + table.title}`,
      table_name: table.table_name,
      columns: table.columns,
    };
    let config = {
      method: 'post',
      url: `http://145.239.168.115:8080/api/v1/db/meta/projects/${table.projectId}/tables`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=a76f010a6b08ba1c76b536fb0203eb6082cc6b5b72623aaa283eb3a6a6b481ede666b3322aa94205',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getTable(id: any) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/meta/tables/${id}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=6436ed0dfbaa6c3bb6acc86818f78aa89e6ea660767ff41074f02b6f173ecd14b87fd9a428dfc023',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addColumn(col: any) {
    const responseAuth = await UsersService.getToken();
    let data = col.col;
    let config = {
      method: 'post',
      url: `http://145.239.168.115:8080/api/v1/db/meta/tables/${col.tableId}/columns`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=d7ba5ac86435b7e49c010ded53846b89b56149eca2981095e4c0ceff236fe8b7562d689d4deb082d',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getViews(tableId: string) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/meta/tables/${tableId}/views`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=e4b8c97b16f84fedd2a42c4514f11f40d78b13dc483c66ccf8156418a4537be0f731fdd9571621aa',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getRows(getRowsInput) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/data/noco/${
        getRowsInput.projectId
      }/${getRowsInput.tableId}/views/${getRowsInput.viewId}?offset=${
        getRowsInput.page - 1
      }&limit=${getRowsInput.limit}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=e4b8c97b16f84fedd2a42c4514f11f40d78b13dc483c66ccf8156418a4537be0f731fdd9571621aa',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getRowsCount(getCountInput) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/data/noco/${getCountInput.projectName}/${getCountInput.tableId}/views/${getCountInput.viewId}/count`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=e4b8c97b16f84fedd2a42c4514f11f40d78b13dc483c66ccf8156418a4537be0f731fdd9571621aa',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addRow(addRowInput) {
    const responseAuth = await UsersService.getToken();
    let data = addRowInput.row;
    let config = {
      method: 'post',
      url: `http://145.239.168.115:8080/api/v1/db/data/noco/${addRowInput.projectId}/${addRowInput.tableId}/views/${addRowInput.viewId}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=e4b8c97b16f84fedd2a42c4514f11f40d78b13dc483c66ccf8156418a4537be0f731fdd9571621aa',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async patchRow(patchRowInput) {
    const responseAuth = await UsersService.getToken();
    let data = patchRowInput.row;
    let config = {
      method: 'patch',
      url: `http://145.239.168.115:8080/api/v1/db/data/noco/${patchRowInput.projectId}/${patchRowInput.tableId}/views/${patchRowInput.viewId}/${patchRowInput.rowIndex}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=e4b8c97b16f84fedd2a42c4514f11f40d78b13dc483c66ccf8156418a4537be0f731fdd9571621aa',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async deleteRow(deleteRowInput) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'delete',
      url: `http://145.239.168.115:8080/api/v1/db/data/noco/${deleteRowInput.projectId}/${deleteRowInput.tableId}/views/${deleteRowInput.viewId}/${deleteRowInput.rowIndex}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=e4b8c97b16f84fedd2a42c4514f11f40d78b13dc483c66ccf8156418a4537be0f731fdd9571621aa',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getColumns(viewId) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/meta/views/${viewId}/columns`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=db7698038e901cc0b46aa340cd8dbd98f4d35999a132994ad9472764ec32916d9e146aabd7a7c86f',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async deleteCol(colId) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'delete',
      url: `http://145.239.168.115:8080/api/v1/db/meta/columns/${colId}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=db7698038e901cc0b46aa340cd8dbd98f4d35999a132994ad9472764ec32916d9e146aabd7a7c86f',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async patchCol(patchColInput) {
    const responseAuth = await UsersService.getToken();
    let data = patchColInput.col;
    let config = {
      method: 'patch',
      url: `http://145.239.168.115:8080/api/v1/db/meta/columns/${patchColInput.colId}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=db7698038e901cc0b46aa340cd8dbd98f4d35999a132994ad9472764ec32916d9e146aabd7a7c86f',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addView(addViewInput) {
    const responseAuth = await UsersService.getToken();
    let data = JSON.stringify({
      title: addViewInput.title,
      type: addViewInput.type,
      copy_from_id: addViewInput.copyId,
      fk_grp_col_id: addViewInput.fkColId,
    });

    let config = {
      method: 'post',
      url: `http://145.239.168.115:8080/api/v1/db/meta/tables/${addViewInput.tableId}/grids`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=7f090c83901cf25b14f513c8a54fe20e0dac3ec951c2780501d9bd349f89a9f86f84d46022d53229',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async canPrimaryKey(getRowsInput) {
    let permession = false;
    let isDuplicate = false;
    const rows = await this.getRows(getRowsInput);
    if (rows.data.list.length === 0) {
      permession = true;
    } else {
      let rowsProps: string[] = Object.getOwnPropertyNames(rows.data.list[0]);
      let key = rowsProps.find((ele) => ele === getRowsInput.colTitle);
      rows.data.list.forEach((item, index) => {
        if (index < rows.data.list.length - 1) {
          if (rows.data.list[index + 1][key] === item[key]) {
            console.log('found duplicate');
            isDuplicate = true;
          }
        }
      });
      isDuplicate ? (permession = false) : (permession = true);
    }
    return {
      canUpdate: permession,
    };
  }
  static async canBeNull(getRowsInput) {
    let permession = false;
    let isNull = false;
    const rows = await this.getRows(getRowsInput);
    if (rows.data.list.length === 0) {
      permession = true;
    } else {
      let rowsProps: string[] = Object.getOwnPropertyNames(rows.data.list[0]);
      let key = rowsProps.find((ele) => ele === getRowsInput.colTitle);
      rows.data.list.forEach((item) => {
        if (item[key] === null) {
          isNull = true;
        }
      });
    }
    isNull ? (permession = false) : (permession = true);
    return {
      canUpdate: permession,
    };
  }
  static async getHooks(getHookInput) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/meta/tables/${getHookInput.tableId}/hooks`,
      headers: {
        'xc-auth': responseAuth.data.token,
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addHook(addHookInput) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'post',
      url: `http://145.239.168.115:8080/api/v1/db/meta/tables/${addHookInput.tableId}/hooks`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=7f090c83901cf25b14f513c8a54fe20e0dac3ec951c2780501d9bd349f89a9f86f84d46022d53229',
      },
      data: addHookInput.data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async deleteHook(hookId) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'delete',
      url: `http://145.239.168.115:8080/api/v1/db/meta/hooks/${hookId}`,
      headers: {
        'xc-auth': responseAuth.data.token,
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async updateHook(updateHookInput) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'patch',
      url: `http://145.239.168.115:8080/api/v1/db/meta/hooks/${updateHookInput.hookId}`,
      headers: {
        'xc-auth': responseAuth.data.token,
      },
      data: updateHookInput.data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addSort(addSortInput) {
    const responseAuth = await UsersService.getToken();
    let data = JSON.stringify({
      title: Math.random().toString(36).substring(2, 8),
      type: 5,
      copy_from_id: null,
      fk_grp_col_id: null,
    });

    let config = {
      method: 'post',
      url: `http://145.239.168.115:8080/api/v1/db/meta/tables/${addSortInput.tableId}/grids`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=7f090c83901cf25b14f513c8a54fe20e0dac3ec951c2780501d9bd349f89a9f86f84d46022d53229',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      const viewId = response.data.id;
      let data = JSON.stringify({
        direction: addSortInput.direction,
        fk_column_id: addSortInput.columnId,
      });
      let config_2 = {
        method: 'post',
        url: `http://145.239.168.115:8080/api/v1/db/meta/views/${viewId}/sorts`,
        headers: {
          'xc-auth': responseAuth.data.token,
          'Content-Type': 'application/json',
          Cookie:
            'refresh_token=7f090c83901cf25b14f513c8a54fe20e0dac3ec951c2780501d9bd349f89a9f86f84d46022d53229',
        },
        data: data,
      };
      const response_2 = await axios(config_2);
      const getRowsInput = {
        tableId: addSortInput.tableId,
        projectId: addSortInput.projectId,
        viewId: viewId,
        page: addSortInput.page,
        limit: addSortInput.limit,
      };
      const response_3 = await this.getRows(getRowsInput);
      return response_3;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addFilter(addFilterInput) {
    const responseAuth = await UsersService.getToken();
    let data = JSON.stringify({
      title: Math.random().toString(36).substring(2, 8),
      type: 5,
      copy_from_id: null,
      fk_grp_col_id: null,
    });

    let config = {
      method: 'post',
      url: `http://145.239.168.115:8080/api/v1/db/meta/tables/${addFilterInput.tableId}/grids`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=7f090c83901cf25b14f513c8a54fe20e0dac3ec951c2780501d9bd349f89a9f86f84d46022d53229',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      const viewId = response.data.id;
      let data = JSON.stringify({
        comparison_op: addFilterInput.comparison_op,
        fk_column_id: addFilterInput.columnId,
        logical_op: addFilterInput.logical_op,
        status: addFilterInput.status,
        value: addFilterInput.value,
      });
      let config_2 = {
        method: 'post',
        url: `http://145.239.168.115:8080/api/v1/db/meta/views/${viewId}/filters`,
        headers: {
          'xc-auth': responseAuth.data.token,
          'Content-Type': 'application/json',
          Cookie:
            'refresh_token=7f090c83901cf25b14f513c8a54fe20e0dac3ec951c2780501d9bd349f89a9f86f84d46022d53229',
        },
        data: data,
      };
      const response_2 = await axios(config_2);
      const getRowsInput = {
        tableId: addFilterInput.tableId,
        projectId: addFilterInput.projectId,
        viewId: viewId,
        page: addFilterInput.page,
        limit: addFilterInput.limit,
      };
      const response_3 = await this.getRows(getRowsInput);
      return response_3;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getRow(getRowInput) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/data/noco/${getRowInput.projectId}/${getRowInput.tableId}/views/${getRowInput.viewId}/${getRowInput.rowId}`,
      headers: {
        'xc-auth': responseAuth.data.token,
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getRowList(getRowListInput) {
    const responseAuth = await UsersService.getToken();
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/data/noco/${
        getRowListInput.projectId
      }/${getRowListInput.tableId}/?offset=${getRowListInput.page - 1}&limit=${
        getRowListInput.limit
      }&fields=${getRowListInput.fields}&sort=${getRowListInput.sort}&where=${
        getRowListInput.filter
      }`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=a76f010a6b08ba1c76b536fb0203eb6082cc6b5b72623aaa283eb3a6a6b481ede666b3322aa94205',
      },
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async addcategorie(table: any) {
    const responseAuth = await UsersService.getToken();
    let data = {
      title: `${'cat__' + table.title}`,
      table_name: table.table_name,
      columns: [],
    };
    let config = {
      method: 'post',
      url: `http://145.239.168.115:8080/api/v1/db/meta/projects/${table.projectId}/tables`,
      headers: {
        'xc-auth': responseAuth.data.token,
        'Content-Type': 'application/json',
        Cookie:
          'refresh_token=a76f010a6b08ba1c76b536fb0203eb6082cc6b5b72623aaa283eb3a6a6b481ede666b3322aa94205',
      },
      data: data,
    };
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      throw new GraphQLError(err.toJSON().status);
    }
  }
  static async getNesetedRowList(data: any) {
    const responseAuth = await UsersService.getToken();
    console.log('tokennn--*--*--*-*-*-*-*-*-*-*-*', responseAuth.data.token);
    let config = {
      method: 'get',
      url: `http://145.239.168.115:8080/api/v1/db/data/noco/${data.projectId}/${data.tableId}/${data.rowId}/${data.relationType}/${data.fieldName}`,
      headers: {
        'xc-auth': responseAuth.data.token,
        Cookie:
          'refresh_token=a76f010a6b08ba1c76b536fb0203eb6082cc6b5b72623aaa283eb3a6a6b481ede666b3322aa94205',
      },
    };
    console.log('configgg-*-*-*-*-*-*-*-*', config.url);
    try {
      const response = await axios(config);
      return response;
    } catch (err) {
      console.log('err*-*-*-**-*-*-**-', err);
      throw new GraphQLError(err.toJSON().status);
    }
  }
}
